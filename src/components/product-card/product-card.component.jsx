import { useContext } from "react";

import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import { CartContext } from "../../contexts/shop-cart.context";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles.js";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />

      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={handleAddProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
