import {Coords} from "../../models"

export interface Food {
    readonly power: number,
    readonly view: string,
    readonly coords: Coords
}