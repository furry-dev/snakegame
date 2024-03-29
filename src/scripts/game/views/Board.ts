import {Snake} from "../gameObjects"
import {Food} from "../gameObjects"

export class Board {
    private _board: HTMLElement

    constructor(element: HTMLElement) {
        this._board = element
        this._board.innerHTML = ``

        this.drawCells()
    }

    drawCells() {
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
            this.getCell(coords.x, coords.y)?.classList.add('snake')
        })
    }

    placeFood(food: Food) {
        this._board.querySelectorAll(`.cell.food`).forEach(value => {
            if (!(value instanceof HTMLElement)) return false
            value.classList.remove('food')
            value.style.removeProperty('background')
        })
        const cell = this.getCell(food.coords.x, food.coords.y)
        if (!cell) return false
        cell.style.background = `url("${food.view}") center / contain no-repeat`
        cell.classList.add('food')
    }

    moveSnake(snake: Snake) {
        this._board.querySelectorAll(`.cell.snake`).forEach(value => value.classList.remove('snake'))
        this.placeSnake(snake)
    }

    getCell(x: number, y: number): HTMLElement | null {
        return this._board.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`)
    }
}