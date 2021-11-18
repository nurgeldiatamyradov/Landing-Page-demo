const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');


btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')) { // Close Hamburger Menu
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElements.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        })
        


    }
    else { // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElements.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        })
        


    }
});