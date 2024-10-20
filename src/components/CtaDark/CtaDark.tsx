import Link from "next/link";
import { Reveal } from "../Reveal";

export function CtaDark() {
  return (
    <section className="px-6 my-20 md:mt-36">
      <section className=" max-w-5xl px-4 py-6 mx-auto border-transparent bg-radialBlack md:px-16 md:py-12 shadow-dark rounded-3xl">
        <section className="grid items-center md:grid-cols-2">
          <section className="my-8">
            <Reveal>
              <h3 className="text-3xl font-bold">
                Ven a probar nuestros servicios
              </h3>
            </Reveal>
            <Reveal>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                quis earum natus a aliquid quod?
              </p>
            </Reveal>
          </section>
          <Link href="#" className="px-4 py-3 mx-auto bg-blueRadial rounded-md">
            <Reveal>Empieza Ahora</Reveal>
          </Link>
        </section>
      </section>
    </section>
  );
}
