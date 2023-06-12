import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const price = queryParams.get('price');
  const parsedPrice = parseFloat(price).toFixed(2);

  return (
    <div className="w-full mx-auto">
      <h2 className="text-3xl text-justify ps-10">Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={parsedPrice}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
