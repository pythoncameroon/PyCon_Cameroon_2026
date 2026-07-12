# Ticket sponsorship form -> Google Sheet setup

The "Sponsor a student ticket" form (`/:lang/attend/sponsor`) is built with
[Forms.md](https://forms.md) and records each submission as a row in a Google
Sheet. Sponsors pay by MTN MoMo or Orange Money, then enter their confirmation
code so the team can match the payment and acknowledge them. The connection is a
Google Apps Script Web App deployed against that sheet. Do this once and the
form works from then on.

## 1. Create the spreadsheet

1. Create a new Google Sheet (e.g. "PyCon Cameroon 2026 - Ticket sponsors").
2. Rename the first tab to **Ticket Sponsors** (this must match
   `ticketSponsorSheetName` in `src/data/ticketSponsor.js`).
3. In row 1, add these column headers exactly, one per column, in this order:

   ```
   _submitted  fullName  email  organisation  phone  tickets  amountPaid  paymentMethod  payerNumber  confirmationCode  acknowledgement  message
   ```

   The script only writes to columns whose header matches a submitted field
   name, so the spelling must match the field names in
   `src/pages/TicketSponsor.jsx`. Extra columns you add (status, receipt
   checked, notes) are left untouched.

   `_submitted` is optional but recommended: the form sends a UTC timestamp
   under that exact key, so a column named `_submitted` fills in automatically.
   The script strips a leading `=` from submitted values, so no live formulae
   are injected.

## 2. Add the script

1. In the sheet, open **Extensions -> Apps Script**.
2. Delete the default `Code.gs` contents and paste everything from
   `google-apps-script/ticket-sponsor.gs`.
3. Save.
4. In the toolbar function dropdown, select **intialSetup** and click **Run**.
   Authorise the script when prompted. This stores the spreadsheet id so
   `doPost` knows where to write.

   Do **not** press Run on `doPost`. It only works when the deployed web app
   receives a real form submission, so running it from the editor gives
   `TypeError: Cannot read properties of undefined (reading 'parameter')` (there
   is no request, so `e` is undefined). The only function you run here is
   `intialSetup`.

## 3. Deploy as a Web App

1. Click **Deploy -> New deployment**.
2. Select type **Web app**.
3. Configure:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**, authorise, and copy the **Web app URL** (ends in `/exec`).

## 4. Point the form at the URL

Open `src/data/ticketSponsor.js` and replace the placeholder value of
`ticketSponsorEndpoint` with the `/exec` URL you copied.

```js
export const ticketSponsorEndpoint =
    'https://script.google.com/macros/s/AKfyc.../exec';
```

Rebuild / redeploy the site. Submissions now land as new rows in the sheet.

## 5. Test the endpoint (optional)

Open the `/exec` URL in a browser. `doGet` returns
`{"ok":true,"status":"Ticket sponsor endpoint is live..."}` if the deployment
is working.

To test a write without the form, POST form fields with curl and check the
sheet for a new row:

```bash
curl -L -X POST '<YOUR /exec URL>' \
  -d '_sheetName=Ticket Sponsors' \
  -d 'fullName=Test Sponsor' \
  -d 'email=test@example.com' \
  -d 'tickets=2' \
  -d 'amountPaid=6200' \
  -d 'paymentMethod=MTN Mobile Money (MoMo)' \
  -d 'confirmationCode=TEST123'
```

If you edit the script after deploying, create a **new version** in
Deploy -> Manage deployments (or the changes will not go live).

## Field reference

| Column | Meaning |
|--------|---------|
| name | Sponsor's full name |
| email | Contact email |
| organisation | Company / org to acknowledge (blank = individual) |
| phone | Contact phone number |
| tickets | Number of student tickets sponsored |
| amountPaid | Total amount paid, in XAF |
| paymentMethod | MTN Mobile Money (MoMo) or Orange Money (OM) |
| payerNumber | Phone number the payment was sent from |
| confirmationCode | Mobile money transaction / confirmation code |
| acknowledgement | Public credit vs anonymous |
| message | Optional note for the students |

## Troubleshooting

- **`Exception: Invalid argument: id` (or `Argument non valide : id`) on POST** —
  the stored spreadsheet id is empty, so `intialSetup` never ran successfully.
  Fix it one of two ways:
  1. **Bound script (recommended):** make sure you opened the script from the
     sheet via **Extensions -> Apps Script**, then run **intialSetup** and check
     the execution log shows success.
  2. **Standalone script:** paste your sheet id into the `SHEET_ID` constant at
     the top of the script (find it in the sheet URL,
     `/spreadsheets/d/THIS_IS_THE_ID/edit`), then create a **new version** in
     Deploy -> Manage deployments.
- **Edited the script but nothing changed** — deployments pin a version. After
  any edit, create a new version in Deploy -> Manage deployments.

## Notes

- To require a CAPTCHA, set `recaptchaSecret` in the script's Script Properties
  and add reCAPTCHA to the Formsmd init options. Optional.
- If you change field names in `TicketSponsor.jsx`, update the sheet headers to
  match, otherwise those values are dropped silently.
