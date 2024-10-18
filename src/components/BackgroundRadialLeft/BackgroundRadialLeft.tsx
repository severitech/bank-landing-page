
import Image from "next/image";

export function BackgroundRadialLeft() {
  return (
    <section className=" left-0 absolute -z-50 top-50">
      <Image
        src='/assets/background-floated-left.png'
        alt="Fondo"
        width={850}
        height={650}
      />
    </section>
  );
}
