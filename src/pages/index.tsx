import tshirt1 from '@/assets/items/1.png';
import tshirt2 from '@/assets/items/2.png';
import tshirt3 from '@/assets/items/3.png';
import { HomeContainer, Product } from "@/styles/pages/home";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from "next/image";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className="keen-slider__slide">
        <Image src={tshirt1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta P</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tshirt2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta M</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tshirt3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta G</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tshirt1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta GG</strong>
          <span>R$ 79,99</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
