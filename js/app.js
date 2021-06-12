const box = document.querySelector('.box')
const menu = document.querySelector('.menu')
const icons = document.querySelector('.icons')

box.addEventListener('click', e => {
    console.log(e.classList)
    e.target.classList.toggle('active');
    menu.classList.toggle('active')
    icons.classList.toggle('active')
    console.log("click")
});



var flight = anime.path('#flight');
var flightPath = anime({
    targets: '#plane',
    translateX: flight('x'),
    translateY: flight('y'),
    rotate: flight('angle'),
    easing: "linear",
    duration: 10000,
    loop: true
    });


var car = anime.path('#race');
var carPath = anime({
    targets: '#car',
    translateX: car('x'),
    translateY: car('y'),
    rotate: car('angle'),
    easing: "linear",
    duration: 10000,
    loop: true
    });