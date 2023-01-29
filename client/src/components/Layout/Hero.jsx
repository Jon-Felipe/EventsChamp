import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// extras
import eventImg1 from '../../assets/event-1.jpg';
import eventImg2 from '../../assets/event-2.jpg';
import eventImg3 from '../../assets/event-3.jpg';

const Hero = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} loop className='mySwiper'>
      <SwiperSlide>
        <img src={eventImg1} alt='event 1' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={eventImg2} alt='event 2' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={eventImg3} alt='event 3' />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
