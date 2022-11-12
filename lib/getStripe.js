import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51M370zBmVn5SpUmNEbN8FrjgThctzaLDVXjogjV48Q6S5zBlwv9HSeJXFESEKWrbsp8EAwEMtOfzCaX1Tys7D9vC00NpLomLMo');
  }

  return stripePromise;
}

export default getStripe;