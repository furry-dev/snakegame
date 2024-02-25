import {StartScreen, GameScreen} from './screens.ts'
import {Board} from './board.ts'
import {Snake} from './snake.ts'
import {Apple, Food} from './food.ts'
import {Coords} from "./coords.ts";
import {randomIntFromInterval} from "./utils.ts";


export class Game {
    private readonly container
    private board: Board | undefined
    private readonly snake: Snake
    private food: Food | undefined
    private gameLoop: number | undefined
    private speed: number = 500
    private gameScreen: GameScreen

    constructor(element: HTMLElement) {
        this.container = element
        this.snake = new Snake()

        this.container.tabIndex = 1
        this.container.focus()

        StartScreen.show(this.container)
        this.gameScreen = new GameScreen(this.container)
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
        this.container.addEventListener('keydown', (e) => {
            switch (e.key) {
                case "ArrowUp":
                    this.snake.setDirection("top")
                    break
                case "ArrowRight":
                    this.snake.setDirection("right")
                    break
                case "ArrowDown":
                    this.snake.setDirection("down")
                    break
                case "ArrowLeft":
                    this.snake.setDirection("left")
                    break
            }
        })
    }

    private placeFood() {
        this.food = new Apple(new Coords(randomIntFromInterval(1, 10), randomIntFromInterval(1, 10)))
        this.gameScreen._board.placeFood(this.food)
    }

    private startGame() {
        this.gameScreen.show()
        this.gameScreen._board.placeSnake(this.snake)
        this.placeFood()
        this.gameLoop = setInterval(this.render.bind(this), this.speed)
    }

    stopGame() {
        clearInterval(this.gameLoop)
    }

    restartGame() {
        this.stopGame()
        this.gameScreen.score = 0
        this.snake.coords = [new Coords(1, 1)]
        this.snake.setDirection('right')
        this.board?.placeSnake(this.snake)
        this.placeFood()
        this.gameLoop = setInterval(this.render.bind(this), this.speed)
    }

    private render() {
        if (!this.snake.move()) {
            alert("Dead")
            return this.restartGame()
        }
        if (this.food && this.snake.head.isEqual(this.food.coords)) {
            this.snake.growth(this.food.power)
            this.gameScreen.score += this.food.power
            this.placeFood()
        }
        requestAnimationFrame(() => this.gameScreen._board.moveSnake(this.snake))
    }
}