import React from 'react';
import { useSelector } from 'react-redux';
import '../../assets/styles/components/modals/ModalBecomePremium.scss';

export const ModalBecomePremium = () => {
  const handler = window.ePayco.checkout.configure({
    key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
    test: true,
  });

  const { user } = useSelector((state) => state.userReducer);

  const handleClick = () => {
    handler.open({
      external: 'false',

      //Parametros compra (obligatorio)
      name: 'Usuario Premium',
      description: 'Usuario premium en Clone Slack',
      invoice: user._id,
      currency: 'cop',
      amount: '50000',
      tax_base: '0',
      tax: '0',
      country: 'co',
      lang: 'es',

      // confirmation: `${process.env.REACT_APP_BASE_URL}`,
      response: `${process.env.REACT_APP_BASE_URL}/response`,

      //Atributos cliente
      name_billing: user.fullName,
    });
  };

  return (
    <div className="modal-become-premium__container">
      <h1 className="modal-become-premium__title">Pasate a usuario premium</h1>
      <p className="modal-become-premium__text">
        Para crear canales privados debes ser usuario premium
      </p>
      <p className="modal-become-premium__text">
        Los canales privados no están disponibles en la lista de canales, por lo
        que solo accederán al canal los miembros que tu invites
      </p>
      <div>
        <button className="form-create-channel__button" onClick={handleClick}>
          Pasate a premium
        </button>
      </div>
    </div>
  );
};
