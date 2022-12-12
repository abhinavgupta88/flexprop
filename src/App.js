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
  
  return (
    <div>
           
      <h1>Yoga Classes</h1>
      <h1 >New Member Registration</h1>
      <Form />
     
    </div>
  );
}


export default App;
