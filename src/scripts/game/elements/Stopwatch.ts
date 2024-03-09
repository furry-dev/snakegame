export class Stopwatch extends HTMLDivElement {
    private seconds: number
    private intervalId: number | undefined

    constructor() {
        super()
        this.seconds = 0
        this.innerHTML = '0:00'
        this.style.fontSize = '2em'
        this.style.textAlign = 'center'
    }

    start() {
        this.intervalId = setInterval(() => {
            this.seconds++
            this.updateTime()
        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId)
    }

    restart() {
        this.seconds = 0
        this.start()
    }

    get time() {
        const minutes = Math.floor(this.seconds / 60)
        const remainingSeconds = this.seconds % 60
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
    }

    updateTime() {
        this.innerHTML = this.time
    }
}


customElements.define('stopwatch-element', Stopwatch, { extends: 'div' })
