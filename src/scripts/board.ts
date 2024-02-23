import {Snake} from "./snake.ts";

export class Board {
    private _board: HTMLElement

    constructor(element: HTMLElement) {
        this._board = element
        this._board.innerHTML = ``

        let currentTen = 10
        let x = 0
        let y = 1

        for (let i = 0; i < 100; i++) {
            if (i % 10 === 0 && i !== 0) {
                currentTen++
                x = 1
                y++
            } else {
                x++
            }

            const delay = i < 10 ? i : currentTen

            this._board.innerHTML += `<div class="cell" style="animation-delay: ${delay / 10}s" data-x="${x}" data-y="${y}"></div>`
        }
    }

    placeSnake(snake: Snake) {
        snake.coords.forEach(coords => {
            this.getCell(coords.x, coords.y)!.classList.add('snake')
        })
    }

    getCell(x: number, y: number) {
        return this._board.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`)
    }
}