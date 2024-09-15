let score = 0;
const box = document.getElementById('box');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const gameOverElement = document.getElementById('game-over');
const finalScoreElement = document.getElementById('final-score');
const gameContainer = document.querySelector('.game-container');

function getRandomPosition() {
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;
    const boxWidth = box.clientWidth;
    const boxHeight = box.clientHeight;

    const x = Math.random() * (containerWidth - boxWidth);
    const y = Math.random() * (containerHeight - boxHeight);

    return { x, y };
}

function moveBox() {
    const { x, y } = getRandomPosition();
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
}

box.addEventListener('click', () => {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    moveBox();
});
let timeLeft = 10;
        const timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `Time left: ${timeLeft}`;

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                gameOverElement.style.display = 'block';
                finalScoreElement.textContent = score;
                box.removeEventListener('click', () => {}); 
            }
        }, 1000);

setInterval(moveBox, 300);
