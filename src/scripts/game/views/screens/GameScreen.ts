import {Board} from "../Board.ts"
import {Stopwatch} from "../../elements"
import {ScoreCounter} from "../../elements";

export class GameScreen {
    private _container: HTMLElement
    readonly _score: ScoreCounter
    public _board: Board
    readonly _timer: Stopwatch

    private readonly header: HTMLDivElement
    private readonly _boardContainer: HTMLDivElement

    constructor(container: HTMLElement) {
        this._container = container

        this.header = document.createElement('div')
        this.header.classList.add('game-header')

        this._timer = new Stopwatch()
        this.header.appendChild(this._timer)

        this._score = new ScoreCounter()
        this.header.appendChild(this._score)

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
        this._score.score = score
    }

    get score() {
        return this._score.score
    }
}
