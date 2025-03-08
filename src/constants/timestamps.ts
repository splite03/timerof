export const TODAY = new Date().toLocaleString('ru-RU').split(',')[0];
// export const TODAY = new Date('04 March 2025 12:00 UTC+5').toLocaleString('ru-RU').split(',')[0];

// export const WORK_DAY_IN_MILLISECONDS = 30600000; // 8:30h
export const WORK_DAY_IN_MILLISECONDS = 14400000; // 4:00h

export const DOORS_MOCKS = [
    {
        start: new Date('06 March 2025 14:00 UTC+5').getTime(),
        end: new Date('06 March 2025 14:12 UTC+5').getTime(),
    },
    {
        start: new Date('06 March 2025 14:27 UTC+5').getTime(),
        end: new Date('06 March 2025 14:32 UTC+5').getTime(),
    },
];