export const grantsDeadline = new Date('2026-08-15T23:59:59+01:00');

export const isGrantsOpen = () => Date.now() <= grantsDeadline.getTime();

export const grantsOpen = isGrantsOpen();

export const grantsEndpoint =
    'https://script.google.com/macros/s/AKfycbxOFVW-AMCfIelNuSc9hY0UUxacBJebq_HarzCnaN_0s4UDEjQb8ExA_cAxG7JTLxJFZA/exec';

export const grantsSheetName = 'Grants';

export const grantTypes = ['Ticket', 'Transport', 'Accommodation'];

export const grantStatusOptions = ['Student', 'Professional', 'Self-taught / hobbyist', 'Other'];

export const cameroonRegions = [
    'Adamawa',
    'Centre',
    'East',
    'Far North',
    'Littoral',
    'North',
    'North-West',
    'South',
    'South-West',
    'West',
];
