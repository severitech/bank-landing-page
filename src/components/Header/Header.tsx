"use client";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { dataHeader } from "./Header.data";
import { useState } from "react";
import { MotionTransition } from "../MotionTransition";
export function Header() {
  const [openMobileMenu, setopenMobileMenu] = useState(false);

  return (
    <MotionTransition>
      <nav className=" flex items-center justify-between max-w-5xl p-4 mx-auto flex-wrap md:py-8">
        <Link href="#" className="flex items-center">
          {" "}
          <Image src="/assets/logo.png" width="150" height="40" alt="Logo" />
        </Link>
        <RiMenu3Line
          className="block text-3xl md:hidden cursor-pointer"
          onClick={() => setopenMobileMenu(!openMobileMenu)}
        />
        <section
          className={`${
            openMobileMenu ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <section className="flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {dataHeader.map(({ id, name, idLink }) => (
              <section
                key={id}
                className="px-4 transition-all duration-1000 ease-in-out"
              >
                <Link href={idLink} className="text-lg hover:text-secondary">
                  {name}
                </Link>
              </section>
            ))}
          </section>
        </section>
      </nav>
    </MotionTransition>
  );
}
