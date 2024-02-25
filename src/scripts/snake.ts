import {Coords} from "./coords.ts";

type Direction = 'right' | 'left' | 'top' | 'down';


export class Snake {
    private _direction: Direction = "right"
    coords: Coords[] = [new Coords(1, 1)]
    private _growth: number = 0

    growth(foodPower: number) {
        this._growth = foodPower
    }

    get length() {
        return this.coords.length
    }

    setDirection(direction: Direction) {
        if (direction == this._direction) return false
        this._direction = direction
    }

    get direction() {
        return this._direction
    }

    move() {
        let newHead: Coords

        switch (this._direction) {
            case 'right':
                newHead = new Coords(this.head.x + 1, this.head.y)
                break
            case 'left':
                newHead = new Coords(this.head.x - 1, this.head.y)
                break
            case 'top':
                newHead = new Coords(this.head.x, this.head.y - 1)
                break
            case 'down':
                newHead = new Coords(this.head.x, this.head.y + 1)
                break
        }

        if (newHead.x < 1 || newHead.x > 10 || newHead.y < 1 || newHead.y > 10) return false

        this.coords.unshift(newHead)

        if (this.length > 1 && this._growth < 1) {
            this.coords.pop()
        } else {
            this._growth--
        }

        return true
    }

    get head() {
        return this.coords[0]
    }

    get tail() {
        return this.coords[this.coords.length - 1]
    }
}