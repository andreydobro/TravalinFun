const horizontScroll = document.querySelector('.popular-destination__cards');
const leftBtn = document.querySelector('.button__left');
const rightBtn = document.querySelectorgit ('.button__right');

rightBtn.addEventListener('click', () => {
    horizontScroll.style.scrollBehavior = 'smooth';
    horizontScroll.scrollLeft += 320;
});

leftBtn.addEventListener('click', () => {
    horizontScroll.scrollLeft -= 320;
});
