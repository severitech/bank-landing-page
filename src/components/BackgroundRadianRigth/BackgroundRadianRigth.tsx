import Image from "next/image";

export function BackgroundRadianRigth() {
  return (
    <section className=" right-0 absolute -z-20 top-0">
        <Image src='/assets/background-floated-right.png' alt="Imagen de fondo" width={850} height={650}/>
    </section>
  )
}
