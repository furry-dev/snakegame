import { StartScreen, GameScreen } from './screens.ts'
import { Board } from './board.ts'
import { Snake } from './snake.ts'

function renderSnakeGame(game: Game) {
    console.log(game)
}

export class Game {
    private readonly container
    private board: Board | undefined
    private snake: Snake
    private gameLoop: number

    constructor(element: HTMLElement) {
        this.container = element
        this.snake = new Snake()

        StartScreen.show(this.container)
        this.setEventListeners()
    }

    setEventListeners() {
        this.container.addEventListener('click', (e) => {
            const target = e.target
            if (!(target instanceof HTMLElement)) return false

            if (target.closest('.start')) {
                this.startGame()
            }
        })
    }

    private startGame() {
        GameScreen.show(this.container)
        this.board = new Board(this.container.querySelector(".board")!)
        this.board.placeSnake(this.snake)
        this.gameLoop = setInterval(this.render.bind(this.snake), 1000)
    }

    stopGame() {
        clearInterval(this.gameLoop)
    }

    private render(snake: Snake) {
        console.log(snake)
        snake.move()

    }
}