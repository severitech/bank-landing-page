import { FirstBlock } from "@/components/FirstBlock";
import { Header } from "./../components/Header/Header";
import { CounterData } from "@/components/CounterData";
import { BestBusiness } from "@/components/BestBusiness";
import { ChooseCard } from "@/components/ChooseCard";
import { ControlBilling } from "@/components/ControlBilling";
import { Testimonials } from "@/components/Testimonials";
import { PaymentsMethods } from "@/components/PaymentsMethods";
import { CtaDark } from "@/components/CtaDark";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Header />
      <FirstBlock />
      <CounterData />
      <BestBusiness />
      <ChooseCard/>
      <ControlBilling/>
      <Testimonials/>
      <PaymentsMethods/>
      <CtaDark/>
      <Footer/>
    </main>
  );
}
