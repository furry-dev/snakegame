import {Coords} from "./Coords.ts";

export class CoordsList extends Array<Coords> {
    constructor(...items: Coords[]) {
        super(...items)
    }

    hasCoords(coords: Coords) {
        return this.some(coord => coord.isEqual(coords))
    }
}