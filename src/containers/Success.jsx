import React from 'react';
import '../styles/componets/success.css';

export const Success = () => {
    return (
        <div className="succes">
      <div className="success-content">
        <h2>Nombre, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="success-map">Google Maps</div>
      </div>
    </div>
    )
}
