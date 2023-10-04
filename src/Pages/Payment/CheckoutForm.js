import React, { useState } from 'react';
import {
    PaymentElement,
    useStripe,
    useElements,
    Elements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState(null);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (elements == null) {
    //         return;
    //     }

    //     // Trigger form validation and wallet collection
    //     const { error: submitError } = await elements.submit();
    //     if (submitError) {
    //         // Show error to your customer
    //         setErrorMessage(submitError.message);
    //         return;
    //     }

    //     // Create the PaymentIntent and obtain clientSecret from your server endpoint
    //     const res = await fetch('/create-intent', {
    //         method: 'POST',
    //     });

    //     const { client_secret: clientSecret } = await res.json();

    //     const { error } = await stripe.confirmPayment({
    //         //`Elements` instance that was used to create the Payment Element
    //         elements,
    //         clientSecret,
    //         confirmParams: {
    //             return_url: 'http://127.0.0.1:8000/complete',
    //         },
    //     });

    //     if (error) {
    //         debugger;
    //         // This point will only be reached if there is an immediate error when
    //         // confirming the payment. Show error to your customer (for example, payment
    //         // details incomplete)
    //         setErrorMessage(error.message);
    //     } else {
    //         debugger;
    //         // Your customer will be redirected to your `return_url`. For some payment
    //         // methods like iDEAL, your customer will be redirected to an intermediate
    //         // site first to authorize the payment, then redirected to the `return_url`.
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        debugger;
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(Elements);
        const result = await stripe.createToken(card);
        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log(result.token);
            // pass the token to your backend API
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};

export default CheckoutForm