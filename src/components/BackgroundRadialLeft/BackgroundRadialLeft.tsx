
import Image from "next/image";

export function BackgroundRadialLeft() {
  return (
    <section className=" left-0 absolute -z-20 top-0">
      <Image
        src='/assets/background-floated-left.png'
        alt="Fondo"
        width={850}
        height={650}
      />
    </section>
  );
}
