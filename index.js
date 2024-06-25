function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//carosal 
'use strict';

const carouselItems = document.querySelectorAll('.carousel__item');
console.log(carouselItems)
let currentItem = document.querySelector('.carousel__item--main');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');


rightBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.carousel__item--right');
    const leftItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item,i) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    leftItem.classList.add('carousel__item--left');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const rightItem = currentId === carouselItems.length -1 ? carouselItems[0] : carouselItems[currentId +1];
    rightItem.classList.add('carousel__item--right');
});

leftBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.carousel__item--left');
    const rightItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item,i) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    rightItem.classList.add('carousel__item--right');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const leftItem = currentId === 0 ? carouselItems[carouselItems.length-1] : carouselItems[currentId-1];
    leftItem.classList.add('carousel__item--left');
});
 


$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

function checkScreenWidth() {
    var liveBtn = document.getElementById('liveBtn');
    if (window.innerWidth < 1200) {
        liveBtn.classList.add('disabled');
        liveBtn.setAttribute('aria-disabled', 'true');
    } else {
        liveBtn.classList.remove('disabled');
        liveBtn.removeAttribute('aria-disabled');
    }
}

// Check screen width on page load
window.onload = checkScreenWidth;
// window.addEventListener('load',checkScreenWidth())

// Check screen width on window resize
window.onresize = checkScreenWidth;

