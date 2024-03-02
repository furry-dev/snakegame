export class Coords {
    constructor(public x: number, public y: number) {}

    isEqual(coords: Coords) {
        return this.x === coords.x && this.y === coords.y
    }
}

export class CoordsList extends Array<Coords> {
    constructor(...items: Coords[]) {
        super(...items)
    }

    hasCoords(coords: Coords) {
        return this.some(coord => coord.isEqual(coords))
    }
}
