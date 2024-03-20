import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import tshirt1 from '@/assets/items/1.png';
import tshirt2 from '@/assets/items/2.png';
import tshirt3 from '@/assets/items/3.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tshirt1} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta P</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
      <Product>
        <Image src={tshirt2} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta M</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
      <Product>
        <Image src={tshirt3} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta G</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
