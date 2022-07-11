// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// init Swiper:
new Swiper('.organic-slider', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination, Autoplay],
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 30,
	speed: 500,
	autoplay: {
		delay: 3000
	},
	navigation: {
		nextEl: '.organic__button-next',
		prevEl: '.organic__button-prev',
	},
	pagination: {
		el: '.organic__dots',
		type: 'bullets',
		clickable: true
	}
});


