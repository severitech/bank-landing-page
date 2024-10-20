import Image from "next/image";
import { Reveal } from "../Reveal";
import { footerData, footerSocialNetworks } from "./Footer.data";
import Link from "next/link";

export function Footer() {
  return (
    <section className=" max-w-5xl p-6 mx-auto mt-10 md:mt-40">
      <section className=" justify-between md:flex">
        <section>
          <Image
            src="/assets/logo.png"
            width={200}
            height={40}
            alt="Logo del banco"
          />
          <Reveal>
            <p className=" mt-5 text-primaryDark max-w-[250px]">
              Una nueva forma sencilla
            </p>
          </Reveal>
        </section>
        {footerData.map(({ id, title, links }) => (
          <section key={id}>
            <h4 className="mt-8 text-lg font-bold md:mt-0">
              <Reveal>{title}</Reveal>
              {links.map(({ id, name, link }) => (
                <Link key={id} href={link} className="block mt-4 font-normal  ">
                  <Reveal>
                    <span className="degradedBlue bg-blueLight hover:text-primary">
                      {name}
                    </span>
                  </Reveal>
                </Link>
              ))}
            </h4>
          </section>
        ))}
      </section>
      <section className="border-[#3f3e45] border-[1px] my-7" />

      <section className=" items-center justify-between md:flex">
        <section className="m-3 text-gray-400">
          <Reveal>
            2024{" "}
            <Link href="https://github.com/severitech">
              <span className="degradedBlue bg-blueLight hover:text-primary ">
                Severitech
              </span>
            </Link>
            . All Rigths Reserved
          </Reveal>
        </section>
        <section className="flex gap-5">
          {footerSocialNetworks.map(({ id, icon, link }) => (
            <Reveal key={id}>
              <Link
                href={link}
                className="text-3xl text-gray-400 hover:text-primary" target="_blank"
              >
                {icon}
              </Link>
            </Reveal>
          ))}
        </section>
      </section>
    </section>
  );
}
