const SHEET_ID = "1u9GRMM2Uu1GoR-6uIJndEeAD_iBSW9nRraOhwhzYdP8";

function doGet() {
	return ContentService.createTextOutput(
		JSON.stringify({ ok: true, status: "Ticket sponsor endpoint is live. POST form submissions here." }),
	).setMimeType(ContentService.MimeType.JSON);
}

function getSpreadsheetColRef(num) {
	const quotient = Math.floor(num / 26);
	const remainder = num % 26;
	const letter = String.fromCharCode(65 + remainder);
	if (quotient > 0) {
		return getSpreadsheetColRef(quotient - 1) + letter;
	} else {
		return letter;
	}
}

function doPost(e) {
	if (!e || !e.parameter) {
		return ContentService.createTextOutput(
			JSON.stringify({ ok: false, error: "No POST data received." }),
		).setMimeType(ContentService.MimeType.JSON);
	}

	const lock = LockService.getScriptLock();
	lock.tryLock(10000);

	try {
		const data = {};
		Object.keys(e.parameter).forEach((key) => {
			data[key] = e.parameter[key];
		});
		data.submittedAt = new Date();

		const doc = SpreadsheetApp.openById(SHEET_ID);
		const sheet = doc.getSheetByName(data._sheetName) || doc.getSheets()[0];

		const colRefs = {};
		const firstRow = sheet
			.getRange(1, 1, 1, sheet.getLastColumn())
			.getValues()[0];
		for (let i = 0; i < firstRow.length; i++) {
			let colName = firstRow[i];
			if (typeof colName === "string") {
				colName = colName.trim();
			}
			colRefs[colName] = i + 1;
		}

		let rowToInsert = sheet.getLastRow() + 1;
		const _ridCol = colRefs._rid || false;
		if (_ridCol) {
			const _ridColLetter = getSpreadsheetColRef(_ridCol - 1);
			const _ridValues = sheet
				.getRange(`${_ridColLetter}:${_ridColLetter}`)
				.getValues();
			for (let i = 0; i < _ridValues.length; i++) {
				if (data._rid === String(_ridValues[i])) {
					rowToInsert = i + 1;
				}
			}
		}

		for (let [key, value] of Object.entries(data)) {
			const colRef = colRefs[key] || false;
			if (colRef) {
				if (typeof value === "string") {
					value = value.trim();
					if (value.startsWith("=")) {
						value = `[${value}]`;
					}
				}
				sheet.getRange(rowToInsert, colRef).setValue(value);
			}
		}

		lock.releaseLock();
		return ContentService.createTextOutput(
			JSON.stringify({ ok: true }),
		).setMimeType(ContentService.MimeType.JSON);
	} catch (err) {
		lock.releaseLock();
		return ContentService.createTextOutput(
			JSON.stringify({ ok: false, error: String(err) }),
		).setMimeType(ContentService.MimeType.JSON);
	}
}
