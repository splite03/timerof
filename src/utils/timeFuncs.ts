export function isWeekend(dateStr) {
    const [day, month, year] = dateStr.split('.').map(num => parseInt(num, 10));
    const date = new Date(year, month - 1, day); // Месяцы в JavaScript начинаются с 0

    const dayOfWeek = date.getDay(); // 0 - воскресенье, 6 - суббота
    return dayOfWeek === 0 || dayOfWeek === 6;
}