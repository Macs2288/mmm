const $circle = document.querySelector('#circle')
const $score = document.querySelector('#score')

// Функция для переключения экранов
function navigateTo(screenId) {
    // Скрыть все экраны
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Показать целевой экран
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}



// Функція для відкриття "Mine" через Telegram
function openMineWindow() {
    const userId = '123456'; // Задайте тут реальний ID користувача
    const coins = +localStorage.getItem('score') || 0; // Беремо прогрес монет з локального сховища
    const botLink = `https://t.me/AVAClickerOneBot?start=mine_${userId}_${coins}`;

    // Перенаправлення до Telegram-бота
    window.location.href = botLink;
}

// Функція для відкриття "TaskManagement" через Telegram
function openTaskManagementWindow() {
    const coins = +localStorage.getItem('score') || 0; // Прогрес монет
    const clicks = +localStorage.getItem('clicks') || 0; // Кількість кліків
    const startTime = +localStorage.getItem('startTime') || Date.now(); // Час початку
    const tasksInfo = btoa(JSON.stringify({ coins, clicks, startTime })); // Закодувати дані

    const botLink = `https://t.me/AVAClickerOneBot?start=tasks_${tasksInfo}`;

    // Перенаправлення до Telegram-бота
    window.location.href = botLink;
}

// Функція для відкриття нового вікна
function openInNewWindow(url) {
    window.open(url, '_blank');
}


       

/*const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
let coins = 0;

// Функція для оновлення прогресу
const levelText = document.getElementById("level-text");
function updateProgress(coins, maxCoins = 46000) {
    const percentage = Math.min((coins / maxCoins) * 100, 100);
    //const offset = 314 - (314 * percentage) / 100; // 314 — довжина кола (2πr)
    const circumference = 2 * 3.14 * 135;
    const offset = circumference - (circumference * percentage) / 100;
    progressBar.style.strokeDashoffset = offset;
    progressText.textContent = `${Math.round(percentage)}%`;


}*/

// Елемент для кліків
/*const circle = document.querySelector("#circle");

// Додавання монет
circle.addEventListener("click", () => {
    coins += 100;
    updateProgress(coins); // Оновлюємо прогрес
});*/




// Функція для перемикання теми

// themeToggleButton.textContent = isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme';

const slider = document.getElementById('slider');
const body = document.body;

// Початкова тема: світла
let isDarkTheme = false;

// Обробник кліка
slider.addEventListener('click', () => {
    if (isDarkTheme) {
        // Переміщення вліво
        slider.style.left = '0';
        slider.classList.remove('transformed'); // Повертаємося до початкового стану
        body.classList.remove('dark');
        body.classList.add('light');

        score.classList.remove('dark')
        score.classList.add('light')



    } else {
        // Переміщення вправо
        slider.style.left = 'calc(100% - 20px)'; // Повна ширина контейнера мінус розмір повзунка
        //slider.classList.add('transformed'); // Змінюємо форму та колір
        body.classList.remove('light');
        body.classList.add('dark');

        score.classList.remove('light')
        score.classList.add('dark')



    }
    isDarkTheme = !isDarkTheme; // Змінюємо стан теми
});


let energy = 100; // Початкова кількість енергії
const maxEnergy = 100; // Максимальна кількість енергії
const energyAmountElement = document.getElementById("energyAmount");
const energyLevelElement = document.getElementById("energyLevel");

// Функція для оновлення енергії
function updateEnergy() {
    energyAmountElement.textContent = energy;
    // Оновлюємо ширину енергетичної смуги в залежності від рівня енергії
    energyLevelElement.style.width = energy + "%";
}

// Додаємо слухач події на коло
document.getElementById("circle").addEventListener("click", function () {
    if (energy > 0) {
        energy--; // Віднімаємо одну одиницю енергії за кожен клік
        updateEnergy(); // Оновлюємо енергію
    } else {
        alert("Energy is depleted!"); // Якщо енергія закінчилась, вивести попередження
    }
});

// Ініціалізуємо початковий стан енергії
updateEnergy();

// Налаштовуємо таймер для відновлення енергії через 10 хвилин
setInterval(function () {
    if (energy < maxEnergy) {
        energy++; // Відновлюємо енергію на 1 одиницю кожні 10 хвилин
        updateEnergy(); // Оновлюємо енергію
    }
}, 6000); // 600000 мс = 10 хвилин



function setScore(score) {
    localStorage.setItem('score', score)
    $score.textContent = score
}

function getScore() {
    return Number(localStorage.getItem('score')) ?? 0
}

function setImage() {
    if (getScore() > 500) {
        $circle.setAttribute('src', 'Firefly злий червоний лев з напів откритою пащею в червоних джунглях з невеличкою гривою 93275 (1).jpg')
    }
    if (getScore() > 1000 ) {
        $circle.setAttribute('src', 'Firefly середній злий червоний лев з напів откритою пащею в червоних джунглях 93275 (1).jpg')
    }
    if (getScore() > 1500) {
        $circle.setAttribute('src', 'Firefly дорослий злий червоний лев з откритою пащею в червоних джунглях 71566 (1).jpg')
    }
}



function addOne() {
    setScore(getScore() + 1)

    setImage()
}

$circle.addEventListener('click', (event) => {


    const rect = circle.getBoundingClientRect()

    const offfsetX = event.clientX - rect.left - rect.width / 2
    const offfsetY = event.clientY - rect.top - rect.height / 2

    const DEG = 40

    const tiltX = (offfsetY / rect.height) * DEG
    const tiltY = (offfsetX / rect.width) * -DEG

    $circle.style.setProperty('--tiltX', `${tiltX}deg`)
    $circle.style.setProperty('--tiltY', `${tiltY}deg`)

    setTimeout(() => {
        $circle.style.setProperty('--tiltX', `0deg`)
        $circle.style.setProperty('--tiltY', `0deg`)
    }, 300)

    const plusOne = document.createElement('div')
    plusOne.classList.add('plus-one')
    plusOne.textContent = '+1'
    plusOne.style.left = `${event.clientX - rect.left}px`
    plusOne.style.top = `${event.clientY - rect.top}px`

    $circle.parentElement.appendChild(plusOne)

    addOne()

    setTimeout(() => {
        plusOne.remove()
    }, 10000)



})


 

  

 