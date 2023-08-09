import './styles/styles.scss';
import './images/lemmoncodelogo.png';

document.addEventListener('DOMContentLoaded', () => {
    const appElement : HTMLElement = document.getElementById('app') as HTMLElement;

    appElement.innerHTML = `
        <h1>¡Hola Mundo!</h1>
        <img class="logo" src="images/lemmoncodelogo.png" alt="Lemmon Code Logo">
        <div class="counter-container">
            <p>Llevas en esta página: <span id="counter">0</span> segundos</p>
        </div>
    `;

    startCounter();
});

const startCounter = (): void => {
    const counterElement: HTMLSpanElement = document.getElementById('counter');
    let seconds: number = 0;

    const updateCounter = (): void => {
        seconds++;
        if (counterElement) {
            counterElement.textContent = seconds.toString();
        }
    };

    setInterval(updateCounter, 1000);
};

