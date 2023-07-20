import './styles/styles.scss';
import './images/lemmoncodelogo.png';

document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = `
        <h1>¡Hola Mundo!</h1>
        <img class="logo" src="images/lemmoncodelogo.png" alt="Lemmon Code Logo">
    `;

});
