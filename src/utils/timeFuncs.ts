export function isWeekend(day: number, month: number, year: number) {
    const date = new Date(year, month - 1, day); // Месяцы в JavaScript начинаются с 0
    const dayOfWeek = date.getDay(); // 0 - воскресенье, 6 - суббота

    return dayOfWeek === 0 || dayOfWeek === 6;
}
function daysInMonth(year: number, month: number) {
    return 32 - new Date(year, month, 32).getDate();
}
export function getWorkDaysInMonth(dateStr: string) {
    const [_, month, year] = dateStr.split('.').map(num => parseInt(num, 10));
    const days = daysInMonth(month, year);
    let weekdays = 0;

    for(let i= 0; i< days; i++) {
        if (!isWeekend(i+1, month, year)) {
            weekdays++;
        }
    }
    return weekdays;
}
