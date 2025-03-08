export type Door = {
    start: number;
    end: number | undefined;
};
export type AllDoors = Record<string | number, {doors: Doors}>;

export type Doors = Door[];