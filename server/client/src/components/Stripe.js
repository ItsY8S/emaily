import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

class Stripe extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="5 Email Credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    )
  }
}

export default Stripe
