import Swiper from "swiper";
import ApiCall from "../utils/ApiCall";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "/src/css/styles.css";


const sliderEL = document.getElementById("menu");

const menusCall = new ApiCall("/menus?isActive=true");

const {
  data: {
    data: { items },
  },
} = await menusCall.get();



const swiper1 = new Swiper(".mySwiper1", {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
