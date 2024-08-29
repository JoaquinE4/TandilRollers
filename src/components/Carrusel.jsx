 // Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import carrusel1 from '../assets/carousel1.jpg'
import carrusel2 from '../assets/carousel2.jpg'
import carrusel3 from '../assets/carousel3.jpg'
import carrusel4 from '../assets/carousel4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
 

export default function Carrusel() {
  return (
    <div className='h-[26rem]  overflow-hidden  :h-[28rem] '>
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination ]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={carrusel1} className='object-contain '  alt='123' /></SwiperSlide>
        <SwiperSlide><img src={carrusel2}    alt='123'/></SwiperSlide>
        <SwiperSlide><img src={carrusel3}   alt='123' /></SwiperSlide>
        
      </Swiper>
    </div>
  );
}
