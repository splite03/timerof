import { Doors } from '../types/Doors'

export const getDifference = (timestamp: number, timestamp_2 = new Date().getTime()): number => {
    return Math.abs(Math.floor(timestamp - timestamp_2));
}
export const getDifferenceOfEach = (doors: Doors) => {
    return doors.reduce((acc, door) => acc + getDifference(door.start, door.end ? door.end : new Date().getTime()), 0);
};