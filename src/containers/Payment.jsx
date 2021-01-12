import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/componets/payments.css';
// npm i react-paypal-button
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';

export const Payment = () => {

    const { state: { cart, buyer }, addNewOrder } = useContext(AppContext);

    const history = useHistory();

    const paypalOptions = {
      clientId: 'AYuFV6VOFwBN-iWHa0DbxCbMIkjSAQzUhmufbgVrbv7dBK0L0hr5IJ4WO_wAwlcuitnn2XYXNlm4es7h',
      intent: 'capture',
      currency: 'USD'
    }

    const buttonStyles = {
      layout: 'vertical',
      shape: 'rect'
    }

     const handleSumTotal = () => {
        // Estudiar esto
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    const handelPaymentSuccess = (data) => {
      console.log(data);
      if(data.status === 'COMPLETED') {
        const newOrder = {
          buyer,
          products: cart,
          payment: data
        }
        addNewOrder(newOrder);
        history.push('checkout/success');
      }
    }

    return (
        <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido:</h3>
        {
          cart.map(item => (
            <div className="payment-item" key={item.title}>
              <div className="payment-element">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
            </div>
          ))
        }
        <div className="payment-button">
          <PayPalButton 
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal}
            onPaymentStart={() => console.log('Start payment')}
            onPaymentSuccess={data => handelPaymentSuccess(data)}
            onPaymentError={err => console.log(err)}
            onPaymentCancel={data => console.log(data)}

          />
        </div>
      </div>
      <div></div>
    </div>
    )
}
