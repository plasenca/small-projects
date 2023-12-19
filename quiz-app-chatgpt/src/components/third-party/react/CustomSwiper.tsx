import type { ReactNode } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import QuestionImage from "@/assets/svgs/QuestionImage.astro";
import QuestionThreeMonster from "@/assets/svgs/QuestionThreeMonster.astro";
import AnswerOnePerson from "@/assets/svgs/AnswerOnePerson.astro";
import { EffectCoverflow, Pagination } from 'swiper/modules';

interface CustomSwiperProps{
  children?: ReactNode;
}

export default function CustomSwiper({ children }: CustomSwiperProps){

  return (
    <Swiper 
    modules={[EffectCoverflow, Pagination]}
      autoplay
      loop
    >
      <SwiperSlide>
        <QuestionImage/>
      </SwiperSlide>
      <SwiperSlide>
        <QuestionThreeMonster/>
      </SwiperSlide>
      <SwiperSlide>
        <AnswerOnePerson/>
      </SwiperSlide>
    </Swiper>
  );
}