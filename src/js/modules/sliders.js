// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// init Swiper:
new Swiper('.organic-slider', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination],
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 30,
	navigation: {
		nextEl: '.organic__button-next',
		prevEl: '.organic__button-prev',
	},
});


