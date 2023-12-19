import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

export default function CustomSwiper(){
  return (
  <div className="swiper">
    <div className="swiper-wrapper">
      <div className="swiper-slide">Slide 1</div>
      <div className="swiper-slide">Slide 2</div>
      <div className="swiper-slide">Slide 3</div>
    </div>
    <div className="swiper-pagination"></div>

    <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>

    <div className="swiper-scrollbar"></div>
  </div>
);
}