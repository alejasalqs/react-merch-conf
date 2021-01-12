import React, { useContext, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/componets/information.css';

export const Information = () => {

    const {state: {cart}, addToBuyer} = useContext(AppContext);

    const form = useRef(null)

    const history = useHistory();

    const handleSubmit = () => {
      const formData = new FormData(form.current);
      const buyer = {
        'name': formData.get('name'),
        'email': formData.get('email'),
        'addres': formData.get('addres'),
        'apto': formData.get('apto'),
        'city': formData.get('city'),
        'country': formData.get('country'),
        'state': formData.get('state'),
        'cp': formData.get('cp'),
        'phone': formData.get('phone'),
      }
      addToBuyer(buyer);
      history.push('/checkout/payment');
    }

    return (
        <div className="information">
          <div className="information-content">
            <div className="information-head">
              <h2>Información de contacto:</h2>
            </div>
            <div className="information-form">
              <form ref={form}>
                <input type="text" placeholder="Nombre completo" name="name" />
                <input type="text" placeholder="Correo Electronico" name="email" />
                <input type="text" placeholder="Direccion" name="addres" />
                <input type="text" placeholder="apto" name="apto" />
                <input type="text" placeholder="Ciudad" name="city" />
                <input type="text" placeholder="Pais" name="country" />
                <input type="text" placeholder="Estado" name="state" />
                <input type="text" placeholder="Codigo postal" name="cp" />
                <input type="text" placeholder="Telefono" name="phone" />
              </form>
            </div>
            <div className="information-buttons">
              <div className="information-back">
                <Link to="/checkout">
                  Regresar
                </Link>
              </div>
              <div className="information-next">
                <button type="button" onClick={handleSubmit}>Pagar</button>
              </div>
            </div>
          </div>
          <div className="information-sidebar">
            <h3>Pedido:</h3>
            {
              cart.map(item => (
                <div className="information-item" key={item.title}>
                  <div className="information-element">
                    <h4>{item.title}</h4>
                    <span>${item.price}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    )
}
