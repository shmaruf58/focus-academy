import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/home/jeremy-bishop-EwKXn5CapA4-unsplash.jpg";
import slide2 from "../../../assets/home/jesse-gardner-9DHyVy-G1rM-unsplash.jpg";
import slide3 from "../../../assets/home/nathan-anderson-5-jtsfuaLBw-unsplash.jpg";
import slide4 from "../../../assets/home/eberhard-grossgasteiger-pBgnT4KH8d4-unsplash.jpg";
import slide5 from "../../../assets/home/thomas-kelley-JoH60FhTp50-unsplash.jpg";

const Category = () => {
  return (
    <section>
      <h1 className="text-5xl font-bold text-center">
        Most Famous Photography
      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24 mt-24"
      >
        <SwiperSlide>
          {" "}
          <img src={slide1} alt="" />
          <h3 className="text-white  md:ps-20 ps-1 md:-mt-16 -mt-8 uppercase md:text-4xl text-xl"></h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide2} alt="" />
          <h3 className="text-white  md:ps-20 ps-1 md:-mt-16 -mt-8 uppercase md:text-4xl text-xl"></h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide3} alt="" />
          <h3 className="text-white  md:ps-20 ps-1 md:-mt-16 -mt-8 uppercase md:text-4xl text-xl"></h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide4} alt="" />
          <h3 className="text-white  md:ps-20 ps-1 md:-mt-16 -mt-8 uppercase md:text-4xl text-xl"></h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide5} alt="" />
          <h3 className="text-white  md:ps-20 ps-1 md:-mt-16 -mt-8 uppercase md:text-4xl text-xl"></h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
