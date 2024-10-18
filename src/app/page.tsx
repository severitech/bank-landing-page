import { FirstBlock } from "@/components/FirstBlock";
import { Header } from "./../components/Header/Header";
import { CounterData } from "@/components/CounterData";
import { BestBusiness } from "@/components/BestBusiness";
export default function Home() {
  return (
    <main>
      <Header />
      <FirstBlock />
      <CounterData />
      <BestBusiness />
    </main>
  );
}
