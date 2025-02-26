import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

export default () => {
	const images = [
		"https://shop.molotow.com/wp-content/uploads/2024/08/Sketcher_Themensets_240729_AT_D.jpg",
		"https://shop.molotow.com/wp-content/uploads/2025/01/LC_B2C_desktop.jpg",
		"https://shop.molotow.com/wp-content/uploads/2024/01/Blackliner_2560x1440_B2C_FL.jpg",
		"https://shop.molotow.com/wp-content/uploads/2024/02/Homeslider_B2C_O4A_Refill_2543x1024_JU.jpg",
	]

	return (
		<Swiper
		className='carousel'
		modules={[Navigation, Pagination, EffectFade, Autoplay]}
		spaceBetween={0}
		slidesPerView={1}
		navigation
		pagination={{ clickable: true }}
		scrollbar={{ draggable: true }}
		effect={'fade'}
		autoplay={{ delay: 20000, disableOnInteraction: false }}
		>
			{images.map((i) => {
				return <SwiperSlide className='containerImage'><img className='sImg' src={i}/></SwiperSlide>
			})}
		</Swiper>
	);
};
