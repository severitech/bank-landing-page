import Link from "next/link";
import { BackgroundRadialLeft } from "../BackgroundRadialLeft";
import { Reveal } from "../Reveal";
import { dataFeaturesBusiness } from "./BestBusiness.data";
import Image from "next/image";

export function BestBusiness() {
  return (
    <section className="relative px-6 py-20 md:py-64 " id="features">
      <BackgroundRadialLeft />
      <section className="grid max-w-5xl mx-auto md:grid-cols-2 ">
        <section>
          <Reveal>
            <h2 className=" text-5xl font-semibold">
              <span className="block degradedBlue bg-blueLight">
                {" "}
                Tú haces el negocio{" "}
              </span>
              nosotros manejamos <br />
              el dinero
            </h2>
          </Reveal>
          <Reveal>
            <p className=" max-w-md mt-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
              quo! Obcaecati consequuntur eius sapiente aut. Accusantium optio
              ducimus asperiores voluptas ipsam ab, qui quas ut ea aliquam,
              quisquam, expedita in.
            </p>
          </Reveal>
          <Reveal>
            <Link href="#clients">
              <button className=" px-4 py-3 mt-5 rounded-md bg-blueRadial">
                Elige tu plan
              </button>
            </Link>
          </Reveal>
        </section>
        <section className="grid items-center py-5 md:p-8">
          {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
            <Reveal key={id}>
              <section className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                <Image
                  src={`/assets/${icon}.png`}
                  alt={title}
                  width={40}
                  height={40}
                />
                <article>
                  <h4 className=" font-bold text-primary">{title}</h4>
                  <p>{description}</p>
                </article>
              </section>
            </Reveal>
          ))}
        </section>
      </section>
    </section>
  );
}
