import {EndScreen, StartScreen} from "../views"
import {GameScreen} from '../views'
import {Snake} from '../gameObjects'
import {Apple} from '../gameObjects'
import {Food} from '../gameObjects'
import {Coords} from "../models"
import {CoordsList} from "../models"
import {randomIntFromInterval} from "../utils"


export class Game {
    private readonly container
    private readonly snake: Snake
    private food: Food | undefined
    private gameLoop: number | undefined
    private speed: number = 500
    private gameScreen: GameScreen

    constructor(element: HTMLElement) {
        this.container = element
        this.snake = new Snake()

        StartScreen.show(this.container)
        this.gameScreen = new GameScreen(this.container)
        this.setEventListeners()
    }

    setEventListeners() {
        this.container.addEventListener('click', (e) => {
            const target = e.target
            if (!(target instanceof HTMLElement)) return false

            if (target.closest('.start')) {
                this.gameScreen.show()
                this.startGame()
            }
            if (target.closest('button[type="reset"]')) {
                this.restartGame()
            }
        })
        document.addEventListener('keydown', (e) => {
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
        let coords = new Coords(randomIntFromInterval(1, 10), randomIntFromInterval(1, 10))
        while (this.snake.coords.hasCoords(coords)) {
            coords = new Coords(randomIntFromInterval(1, 10), randomIntFromInterval(1, 10))
        }
        this.food = new Apple(coords)
        this.gameScreen._board.placeFood(this.food)
    }

    private startGame() {
        localStorage.setItem("old-record", localStorage.getItem("record") || "0")

        this.gameScreen._board.placeSnake(this.snake)
        this.placeFood()
        this.gameScreen.score = this.snake.length
        this.gameLoop = setInterval(this.render.bind(this), this.speed)
        this.gameScreen._timer.restart()
    }

    stopGame() {
        clearInterval(this.gameLoop)
        this.gameScreen._timer.stop()
    }

    restartGame() {
        this.gameScreen._board.clearBoard()
        EndScreen.hide(this.container)
        this.snake.coords = new CoordsList(new Coords(1, 1))
        this.snake.setDirection('right')
        this.startGame()
    }

    private render() {
        if (!this.snake.move()) {
            EndScreen.show(this.container, this.gameScreen.score, this.gameScreen._timer.time)
            this.stopGame()
        }
        if (this.food && this.snake.head.isEqual(this.food.coords)) {
            this.snake.growth(this.food.power)
            this.gameScreen.score += this.food.power

            if (this.gameScreen.score > parseInt(localStorage.getItem("record") || "0")) {
                localStorage.setItem("record", String(this.gameScreen.score))
            }
            this.placeFood()
        }
        requestAnimationFrame(() => this.gameScreen._board.moveSnake(this.snake))
    }
}