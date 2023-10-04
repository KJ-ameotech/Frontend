import { useParams } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './Payment.css';
import Layout from "../../Layout";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Payment = () => {
    const params = useParams();

    const options = {
        mode: 'payment',
        amount: params.id,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
    };

    return (
        <Layout>
            <section className="cards-wrapper">
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm />
                </Elements>
            </section>
        </Layout>
    )
}
export default Payment