const horizontScroll = document.querySelector('.popular-destination__cards');
const leftBtn = document.querySelector('.button__left');
const rightBtn = document.querySelector('.button__right');
const scroll = document.querySelector('.place__cards');
const prevButton = document.querySelector('.place__button-prev');
const nextButton = document.querySelector('.place__button-next');

rightBtn.addEventListener('click', () => {
    horizontScroll.style.scrollBehavior = 'smooth';
    horizontScroll.scrollLeft += 320;
});

leftBtn.addEventListener('click', () => {
    horizontScroll.style.scrollBehavior = 'smooth';
    horizontScroll.scrollLeft -= 320;
});

nextButton.addEventListener('click', () => {
    scroll.style.scrollBehavior = 'smooth'
    scroll.scrollLeft += 430 
});

prevButton.addEventListener('click', () => {
    scroll.style.scrollBehavior = 'smooth'
    scroll.scrollLeft -= 430
})