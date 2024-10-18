"use client";
import Link from "next/link";
import { BackgroundRadianRigth } from "../BackgroundRadianRigth";
import { MotionTransition } from "../MotionTransition";
import Image from "next/image";
import { Reveal } from "../Reveal";

export function FirstBlock() {
  return (
    <section className="relative p-4 md:py-40">
      <BackgroundRadianRigth />
      <section className="grid max-w-5xl mx-auto md:grid-cols-2">
        <section>
          <Reveal>
            <h1 className="text-5xl font-semibold">
              El nuevo{" "}
              <span className="block degradedBlue bg-blueLight">
                banco digital
              </span>{" "}
              para todos
            </h1>
          </Reveal>
          <Reveal>
            <p className=" max-w-md mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              illo assumenda consectetur at natus quas labore fugiat sequi iure?
              Et officia sequi, tempore tenetur quo dolore nemo accusamus!
              Minima, sunt.
            </p>
          </Reveal>
          <Reveal>
            <Link href="#clients">
              <button className="my-8 bg-blueRadial px-4 py-3 rounded-md">
                Empieza Ya
              </button>
            </Link>
          </Reveal>
        </section>
        <MotionTransition className="flex items-center justify-center">
          <Image
            src="/assets/cards-block.png"
            alt="Card"
            width={450}
            height={450}
            className="h-auto"
          />
        </MotionTransition>
      </section>
    </section>
  );
}
