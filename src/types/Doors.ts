export type Door = {
    start: number;
    end: number | undefined;
};
export type DayData = {doors: Doors, totalTime: number;}
export type AllDoors = Record<any, DayData>;
export type Doors = Door[];