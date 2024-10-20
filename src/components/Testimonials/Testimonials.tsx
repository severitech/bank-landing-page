"use client";
import { BackgroundRadianRigth } from "../BackgroundRadianRigth";
import { Reveal } from "../Reveal";
import { Slide } from "../Slide";
import { useState, useEffect } from "react";

export function Testimonials() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="relative p-8 md:py-64">
      <BackgroundRadianRigth />
      <section className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
        <section className="swiper-container-section">
          <Reveal>
            <h2 className="text-5xl font-bold mb-5">
              Que dicen los clientes de nosotros
            </h2>
          </Reveal>
        </section>
        <section className="swiper-container-section self-center">
          <Reveal>
            <p className="text-primary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis provident, voluptatum ea ullam molestiae magnam!
            </p>
          </Reveal>
        </section>
      </section>

      <section>
        <Slide />
      </section>
    </section>
  );
}
