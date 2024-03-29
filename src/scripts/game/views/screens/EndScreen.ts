export class EndScreen {
    static show(container: HTMLElement, score: number, time: string) {
        const endDiv = document.createElement('div')
        endDiv.classList.add('end-game')

        endDiv.innerHTML = `
            <h3>End of the game!</h3>
            ${score > parseInt(localStorage.getItem('old-record') || "0") ? "<h4 class='new-record'>New record!</h4>" : ""}
            <div class="data">
                <div class="score">${score}</div>
                <div class="time">${time}</div>
            </div>
            <div class="buttons">
                <button type="reset">Restart</button>
            </div>
        `

        container.append(endDiv)
    }

    static hide(container: HTMLElement) {
        container.querySelector('.end-game')?.remove()
    }
}
