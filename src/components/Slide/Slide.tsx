"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataTestimonials } from "../Testimonials/Testimonials.data";
import { Reveal } from "../Reveal";
import Image from "next/image";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";

export function Slide() {
  return (
    <section className="swiper-container-section">
    <Swiper
    breakpoints=
      {{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        678: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="h-[250px] w-full md:max-w-5xl" id="testimonios"
    >
      {dataTestimonials.map(({ id, name, work, testimonial, image }) => (
        <SwiperSlide key={id} className=" my-5 cursor-pointer md:px-10">
          <Reveal>
            <Image
              src="/assets/testimonial-icon.png"
              alt="Testimonio"
              width={50}
              height={50}
              className=" w-auto h-auto"
            />
            <section className="my-5">{testimonial}</section>
            <section className="flex">
              <Image
                src={image}
                alt={name}
                width={50}
                height={50}
                className=" mr-5"
              />
              <section>
                <h4 className=" text-center font-semibold">{name}</h4>
                <p className=" text-primaryDark">{work}</p>
              </section>
            </section>
          </Reveal>
        </SwiperSlide>
      ))}
    </Swiper></section>
  );
}
