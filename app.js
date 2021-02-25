


openhamburger = document.querySelector('.openhamburger');

menu = document.querySelector('.menu');
// main = document.querySelector('.main');
nav = document.querySelector('.nav');

closehamburger = document.querySelector('.closehamburger');


openhamburger.addEventListener('click',() => {
    menu.style.display = 'flex';
    // nav.style.display = 'none';

    // main.style.opacity='0.5';
    // menu.style.opacity='1';
    menu.style.top = '0';
})


closehamburger.addEventListener('click',() => {
    menu.style.top = '-100%';
})


helping = document.querySelector('.helping');
number = document.querySelector('.number');

helping.addEventListener('mouseover', ()=> {
    number.style.animation = 'shake 0.5s 3';
    number.style.color = 'red';
})

helping.addEventListener('mouseout', ()=> {
    number.style.animation = 'none';
    number.style.color = 'green';
})
