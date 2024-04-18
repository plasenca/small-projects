import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";

// import "./styles.css";

import slide1 from "@/assets/static/svgs/question_three_monsters.svg";
import slide2 from "@/assets/static/svgs/question_two_people.svg";
import slide3 from "@/assets/static/svgs/answer_one_person.svg";

export default function CustomSwiper(){

  return (
    <Swiper 
    modules={[EffectCoverflow, Pagination]}
    loop
    >
      <SwiperSlide>
        <img src={slide1.src} alt="" className='w-[50vh] aspect-square'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2.src} alt="" className='w-[50vh] aspect-square' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3.src} alt="" className='w-[50vh] aspect-square' />
      </SwiperSlide>
    </Swiper>
  );
}