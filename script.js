// Получаем элементы бургер-меню и оверлея
const burgerMenu = document.getElementById('burger-menu');
const burgerOverlay = document.getElementById('burger-overlay');
const closeBtn = document.getElementById('close-btn');

// Открываем меню при клике на бургер
burgerMenu.addEventListener('click', () => {
    burgerOverlay.classList.add('active');
});

// Закрываем меню при клике на крестик
closeBtn.addEventListener('click', () => {
    burgerOverlay.classList.remove('active');
});

// Закрываем меню при клике на ссылку
document.querySelectorAll('.overlay-item').forEach(item => {
    item.addEventListener('click', () => {
        burgerOverlay.classList.remove('active');
    });
});
