import React, { useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./App.css";
import Form from "./FormComp/Form";
import './FormComp/Form.css';
const App = () => {
  const stripe = loadStripe(
    "pk_test_51MEF9YSE9lWcFf0NjHbX7C8CJqMutbSAdmsGAXhOmwBm8rpHydrAvcD2XhTr8YLswSXTFUbWOJ4McHl5z8VEahIU00ja92X7CX"
  );
  return (
    <Elements stripe={stripe}>
      <CheckoutForm />
    </Elements>
  );
};
function CheckoutForm() {
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const payMoney = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setPaymentLoading(true);
    const clientSecret = "sk_test_51MEF9YSE9lWcFf0NusHWNC8vQLeiBKYQMxwHse8YZf4jQRHFEAPybSObzWDMKdbp5ygko73Zbh5VNCrmVbB1kyJe00QxNL0Ryk";
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "new user",
        },
      },
    });
    setPaymentLoading(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Success!");
      }
    }
  };

  return (
    <div
      style={{
        padding: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <form
          style={{
            display: "block",
            width: "100%",
          }}
          onSubmit = {payMoney}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardElement
              className="card"
              options={{
                style: {
                  base: {
                    backgroundColor: "white"
                  } 
                },
              }}
            />
      <h1>Yoga Classes</h1>
      <h1 >New Member Registration</h1>
      <Form />
            <button
              className="pay-button"
              disabled={isPaymentLoading}
            >
              {isPaymentLoading ? "Loading..." : "Register"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default App;
