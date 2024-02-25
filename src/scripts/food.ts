import appleImg from '../images/apple.svg'
import {Coords} from "./coords.ts";

export interface Food {
    readonly power: number,
    readonly view: string,
    readonly coords: Coords
}

export class Apple implements Food {
    readonly power = 1
    readonly view = appleImg
    readonly coords

    constructor(coords: Coords) {
        this.coords = coords
    }
}