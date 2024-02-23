type Direction = 'right' | 'left' | 'top' | 'down';
type Coords = {x: number, y: number}

export class Snake {
    private _direction: Direction = "right"
    coords: Coords[] = [{x: 1, y: 1}]

    growth(foodPower: number) {
        const tail = this.coords[-1]
        const pretail = this.coords[-2]

        console.log(tail, pretail, foodPower)
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
        const head = this.coords[0]

        console.log(head)

        switch (this._direction) {

        }
    }
}