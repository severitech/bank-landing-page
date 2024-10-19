"use client";

import Image from "next/image";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";

export function ControlBilling() {
  return (
    <section className="relative p-4 py-20 md:py-64">
      <section className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
        <MotionTransition className=" flex-1 p-6 md:p-8">
          <Image src='/assets/control-business.png' alt="control business" width={580} height={411} className="w-full h-auto"/>
        </MotionTransition>
        <section className=" flex-1 p-6 md:p-8">
          <Reveal>
            <h2 className=" text-5xl font-semibold">Controla Facilmente <br />tu facturación</h2>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In culpa accusamus fugiat exercitationem doloremque tempore ipsum cum quibusdam esse neque praesentium sint delectus laboriosam, ab aspernatur aliquid facilis soluta! Quas!</p>
          </Reveal>
        </section>
      </section>
    </section>
  );
}
