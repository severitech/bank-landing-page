"use client";
import "swiper/css";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { dataPayment } from "./Payment.data";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function PaymentsMethods() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="relative py-20 md:py-64" id="servicios">
      <BackgroundRadialLeft />
      <section className="relative w-full overflow-hidden swiper-container-section">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 8,
              spaceBetween: 15,
            },
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          grabCursor={true}
          loop={true}
          speed={1000}
          slidesPerView="auto"
          className="payments-swiper"
        >
          {dataPayment.map(({ id, name, image }) => (
            <SwiperSlide
              key={id}
              className="flex items-center justify-center slider-horizontal"
            >
              <Image
                src={image}
                width={70}
                height={50}
                alt={name}
                className="h-[60px] w-[120px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}
