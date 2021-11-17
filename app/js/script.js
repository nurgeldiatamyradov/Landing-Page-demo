const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelector('.has-fade');


btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')) { // Close Hamburger Menu
        header.classList.remove('open');
        fadeElements.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        })
        


    }
    else { // Open Hamburger Menu
        header.classList.add('open');
        fadeElements.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        })
        


    }
});