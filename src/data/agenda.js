export const DAYS = [
    { key: 'day1', date: 'September 17, 2026', label: 'Day 1', sublabel: 'PyCon' },
    { key: 'day2', date: 'September 18, 2026', label: 'Day 2', sublabel: 'UbuCon' },
    { key: 'day3', date: 'September 19, 2026', label: 'Day 3', sublabel: 'PyCon' },
];

export const agenda = {
    day1: [
        { time: '08:00', title: 'Registration & Welcome Coffee', type: 'break', room: '' },
        { time: '09:00', title: 'Opening Ceremony', type: 'keynote', room: 'Main Hall', speaker: 'Organizing Committee' },
        { time: '09:45', title: 'Keynote: Python in Africa', type: 'keynote', room: 'Main Hall', speaker: 'TBA' },
        { time: '10:45', title: 'Coffee Break', type: 'break', room: '' },
        { time: '11:00', title: 'Building Scalable APIs with FastAPI', type: 'talk', room: 'Track A', speaker: 'TBA' },
        { time: '11:00', title: 'Python for Data Science Beginners', type: 'talk', room: 'Track B', speaker: 'TBA' },
        { time: '12:00', title: 'Lunch Break', type: 'break', room: '' },
        { time: '13:30', title: 'Workshop: Machine Learning with Scikit-Learn', type: 'workshop', room: 'Workshop Room 1', speaker: 'TBA' },
        { time: '13:30', title: 'Django REST Framework Deep Dive', type: 'talk', room: 'Track A', speaker: 'TBA' },
        { time: '15:00', title: 'Coffee Break', type: 'break', room: '' },
        { time: '15:30', title: 'Lightning Talks', type: 'lightning', room: 'Main Hall', speaker: 'Community' },
        { time: '16:30', title: 'Networking Reception', type: 'social', room: 'Courtyard' },
    ],
    day2: [
        { time: '08:30', title: 'UbuCon Registration & Coffee', type: 'break', room: '' },
        { time: '09:00', title: 'UbuCon Opening Remarks', type: 'keynote', room: 'Main Hall', speaker: 'UbuCon Cameroon Team' },
        { time: '09:30', title: 'Keynote: Ubuntu in Africa', type: 'keynote', room: 'Main Hall', speaker: 'TBA' },
        { time: '10:30', title: 'Coffee Break', type: 'break', room: '' },
        { time: '11:00', title: 'Linux System Administration Best Practices', type: 'talk', room: 'Track A', speaker: 'TBA' },
        { time: '11:00', title: 'Open Source Contributions: Getting Started', type: 'talk', room: 'Track B', speaker: 'TBA' },
        { time: '12:00', title: 'Lunch Break', type: 'break', room: '' },
        { time: '13:30', title: 'Workshop: Cloud Infrastructure with Ubuntu', type: 'workshop', room: 'Workshop Room 1', speaker: 'TBA' },
        { time: '13:30', title: 'Python Powers the Ubuntu Ecosystem', type: 'talk', room: 'Track A', speaker: 'TBA' },
        { time: '15:00', title: 'Coffee Break', type: 'break', room: '' },
        { time: '15:30', title: 'Ubuntu Community Panel', type: 'talk', room: 'Main Hall', speaker: 'TBA' },
        { time: '16:30', title: 'UbuCon Closing & Social', type: 'social', room: 'Courtyard' },
    ],
    day3: [
        { time: '08:30', title: 'Morning Coffee', type: 'break', room: '' },
        { time: '09:00', title: 'Keynote: The Future of Python', type: 'keynote', room: 'Main Hall', speaker: 'TBA' },
        { time: '10:00', title: 'Coffee Break', type: 'break', room: '' },
        { time: '10:30', title: 'Async Python in Production', type: 'talk', room: 'Track A', speaker: 'TBA' },
        { time: '10:30', title: 'Workshop: DevOps with Python', type: 'workshop', room: 'Workshop Room 1', speaker: 'TBA' },
        { time: '12:00', title: 'Lunch Break', type: 'break', room: '' },
        { time: '13:30', title: 'Building AI Applications with Python', type: 'talk', room: 'Track A', speaker: 'TBA' },
        { time: '13:30', title: 'Community Sprints', type: 'workshop', room: 'Workshop Room 2', speaker: 'Open to All' },
        { time: '15:00', title: 'Coffee Break', type: 'break', room: '' },
        { time: '15:30', title: 'Community Lightning Talks', type: 'lightning', room: 'Main Hall', speaker: 'Community' },
        { time: '16:30', title: 'Closing Ceremony & Awards', type: 'keynote', room: 'Main Hall', speaker: 'Organizing Committee' },
        { time: '17:30', title: 'Farewell Reception', type: 'social', room: 'Courtyard' },
    ],
};

export const TYPE_STYLES = {
    keynote: { color: 'var(--color-orange)', label: 'Keynote' },
    talk: { color: 'var(--color-green)', label: 'Talk' },
    workshop: { color: 'var(--color-blue)', label: 'Workshop' },
    lightning: { color: 'var(--color-gold)', label: 'Lightning' },
    break: { color: 'var(--color-text-muted)', label: 'Break' },
    social: { color: 'var(--color-red)', label: 'Social' },
};
