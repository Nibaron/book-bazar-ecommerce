import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks";
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/Orderfail";

export const OrderPage = () => {
  useTitle("Order Page");
  

  const { state } = useLocation();

  return (
    <main>
      { state.status ? <OrderSuccess data={state.data} /> : <OrderFail /> }
    </main>
  )
}