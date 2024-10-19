"use client";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { BackgroundRadianRigth } from "../BackgroundRadianRigth";
import { MotionTransition } from "../MotionTransition";
import { EffectCards } from "swiper/modules";
import { dataCards } from "./ChooseCard.data";
import Image from "next/image";
import { Reveal } from "../Reveal";

export function ChooseCard() {
  return (
    <section className="relative px-6 py-20 md:py-64" id="tarjetas">
      <BackgroundRadianRigth />
      <section className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
        <Reveal>
          <h2 className="font-bold text-5xl">
            Elige la tarjeta{" "}
            <span className="block degradedBlue bg-blueLight">
              que se adapta a tus necesidades
            </span>
          </h2>
        </Reveal>
        <section className=" left-0 mx-10">
          <MotionTransition className="">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              tag="section"
            >
              {dataCards.map(({ image, id }) => (
                <SwiperSlide key={id} tag="section">
                  <section>
                    <Image
                      src={image}
                      alt="Credit Card"
                      width="500"
                      height="400"
                    />
                  </section>
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionTransition>
        </section>
      </section>
    </section>
  );
}
