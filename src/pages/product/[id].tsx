import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta P</h1>
        <span>R$ 79,99</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero earum repellendus incidunt dicta dolore, modi dolores minima facere ullam quasi, suscipit impedit? Ab delectus quae itaque dolores laborum officia eum!</p>
        <button>
          Comprar
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}
