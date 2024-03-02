import {Board} from "./board.ts";

export class StartScreen {
    static show(container: HTMLElement) {
        container.innerHTML = `
            <div class="start-header">
                <h3>My record:</h3>
                <a class="score">${localStorage.getItem("record") || 0}</a>
            </div>
            <h1>Snake</h1>
            <div class="buttons">
                <button class="start">Start</button>
            </div>
        `
    }
}

export class GameScreen {
    private _container: HTMLElement
    private _score: number = 0
    public _board: Board

    private readonly header: HTMLDivElement
    private readonly _scoreContainer: HTMLAnchorElement
    private readonly _boardContainer: HTMLDivElement

    constructor(container: HTMLElement) {
        this._container = container

        this.header = document.createElement('div')
        this.header.classList.add('game-header')
        this.header.innerHTML = '<h3>Score:</h3>'

        this._scoreContainer = document.createElement('a')
        this._scoreContainer.textContent = String(this._score)
        this.header.append(this._scoreContainer)

        this._boardContainer = document.createElement('div')
        this._boardContainer.classList.add('board')
        this._board = new Board(this._boardContainer)
    }

    show() {
        this._container.innerHTML = ''
        this._container.append(this.header)
        this._container.append(this._boardContainer)
    }

    set score(score: number) {
        this._score = score
        this._scoreContainer.textContent = String(score)
    }

    get score() {
        return this._score
    }
}

export class EndScreen {

}
