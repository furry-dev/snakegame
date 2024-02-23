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

    static show(container: HTMLElement) {
        container.innerHTML = `
            <div class="game-header">
                <h3>Score:</h3>
                <a class="score">${localStorage.getItem("record") || 0}</a>
            </div>
            <div class="board">
            
            </div>
        `
    }
}