import appleImg from '../../../../images/apple.svg'
import {Coords} from "../../models"
import {Food} from "./Food.ts"

export class Apple implements Food {
    readonly power = 1
    readonly view = appleImg
    readonly coords

    constructor(coords: Coords) {
        this.coords = coords
    }
}