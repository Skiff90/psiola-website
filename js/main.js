var acc = document.getElementsByClassName("staff__acordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");

	});
}

var acc2 = document.getElementsByClassName("testemonail__button");
var acc1 = document.getElementsByClassName("testemonial__button-div");
var i;

for (i = 0; i < acc1.length; i++) {
	acc1[i].addEventListener("click", function () {
		this.classList.toggle("active");
      acc2.classList.toggle("active");
	});
}
var acc4 = document.getElementsByClassName("testemonail__button");
var acc3 = document.getElementsByClassName("fqs__text");
var i;

for (i = 0; i < acc3.length; i++) {
	acc3[i].addEventListener("click", function () {
		this.classList.toggle("active");
      acc4.classList.toggle("active");
	});
}

const contactButton = document.querySelector('.contact__button-hidden')
const contactHidden = document.querySelector('.contact__hidden')

contactButton.addEventListener('click', function(){
   contactHidden.classList.toggle('active')
});


const swiper = new Swiper('.testemonials__container', {
	spaceBetween: 70,
	// grabCursor: true,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next4',
		prevEl: '.swiper-button-prev4',
	},
	breakpoints: {

		800: {
			slidesPerView: 2,
		},
	},
});
const swiper2 = new Swiper('.deplomes-swiper', {
	spaceBetween: 70,
	// grabCursor: true,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next5',
		prevEl: '.swiper-button-prev5',
	},

});
const swiper3 = new Swiper('.links-swiper', {
	spaceBetween: 70,
	// grabCursor: true,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next6',
		prevEl: '.swiper-button-prev6',
	},

});
const swiper4 = new Swiper('.help__swiper', {
	spaceBetween: 70,
	// grabCursor: true,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next7',
		prevEl: '.swiper-button-prev7',
	},

});
const swiper5 = new Swiper('.contact__swiper', {
	spaceBetween: 70,
	// grabCursor: true,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next7',
		prevEl: '.swiper-button-prev7',
	},

});


const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__nav');

headerBurger.addEventListener('click', function(){
	headerMenu.classList.toggle("active")
	headerBurger.classList.toggle("active")
})