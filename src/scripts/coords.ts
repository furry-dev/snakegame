export class Coords {
    constructor(public x: number, public y: number) {}

    isEqual(coords: Coords) {
        return this.x === coords.x && this.y === coords.y
    }
}