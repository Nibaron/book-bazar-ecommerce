import { useTitle } from "../../hooks";
import { CartEmpty } from "./components/Cartempty";
import { CartList } from "./components/CartList";


export const CartPage = () => {
  const cartLength  = 1;
  useTitle(`Cart`);

  return (
    <main>       
      { cartLength ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}