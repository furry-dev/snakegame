export class ScoreCounter extends HTMLDivElement {
    private _score = 0

    constructor() {
        super()
        this.score = 0
        this.style.fontSize = '2em'
        this.style.textAlign = 'center'
    }

    set score(value: number) {
        this._score = value
        this.innerHTML = `Score: ${this._score}`
    }

    get score() {
        return this._score
    }
}

customElements.define('score-counter-element', ScoreCounter, { extends: 'div' });