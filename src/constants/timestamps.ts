export const TODAY = new Date().toLocaleString('ru-RU').split(',')[0];
// export const TODAY = new Date('13 March 2025 12:00 UTC+5').toLocaleString('ru-RU').split(',')[0];

// export const WORK_DAY_IN_MILLISECONDS = 30600000; // 8:30h
export const WORK_DAY_IN_MILLISECONDS = 4 * 60 * 60 * 1000; // 4:00h