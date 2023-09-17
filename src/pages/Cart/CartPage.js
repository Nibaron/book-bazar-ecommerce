import { useCart } from "../../context";
import { useTitle } from "../../hooks";

import { CartEmpty } from "./components/Cartempty";
import { CartList } from "./components/CartList";


export const CartPage = () => {
const {cartList} =useCart();
  
  useTitle(`Cart`);

  return (
    <main>       
      { cartList.length ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}