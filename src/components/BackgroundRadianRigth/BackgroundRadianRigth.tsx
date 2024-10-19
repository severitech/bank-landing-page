import Image from "next/image";

export function BackgroundRadianRigth() {
  return (
    <section className="right-0 absolute top-0 -z-50">
      <Image
        src="/assets/background-floated-right.png"
        alt="Imagen de fondo" width={850} height={650}
      />
    </section>
  );
}
