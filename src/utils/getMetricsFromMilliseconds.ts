import { WORK_DAY_IN_MILLISECONDS } from '../constants'

export const getSeconds = (milliseconds: number) => {
    const value = Math.abs(Math.floor((milliseconds / 1000) % 60));
    return value <= 9 ? `0${value}` : `${value}`;
}
export const getMinutes = (milliseconds: number) => {
    const value = Math.abs(Math.floor((milliseconds / (1000 * 60)) % 60));
    return value <= 9 ? `0${value}` : `${value}`;
}
export const getHours = (milliseconds: number) => {
    const value = Math.floor((milliseconds / (1000 * 60 * 60)));
    if (value >= 0) {
        return value <= 9 ? `0${value}` : `${value}`;
    }

    return Math.abs(value) <= 9 ? `0${Math.abs(value)}` : `${Math.abs(value)}`;
}
export const getPercent = (timestamp: number) => {
    const onePercent = WORK_DAY_IN_MILLISECONDS / 100;

    return Math.abs(timestamp / onePercent);
}
export const getAllMetrics = (timestamp: number) => {
    const seconds = getSeconds(timestamp);
    const minutes = getMinutes(timestamp);
    const hours = getHours(timestamp);
    const percent = getPercent(timestamp);

    return {
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        string: `${hours}:${minutes}:${seconds}`,
        percent: percent,
    };
}