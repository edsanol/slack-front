import React, { useState } from 'react';
import '../../assets/styles/components/modals/ModalCreateChannel.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createChannelAction } from '../../store/actions/actionsChannel';
import { Modal } from '@mantine/core';
import { ModalBecomePremium } from './ModalBecomePremium';

export const ModalCreateChannel = ({ setOpenedNewChannel }) => {
  const [openedModal, setOpenedModal] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const userId = useSelector((state) => state.authReducer.uid);
  const userPremium = useSelector((state) => state.userReducer.user.premium);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let { name, description, select } = data;

    if (select === 'private') {
      select = true;
    } else {
      select = false;
    }

    if (select === true && userPremium === true) {
      dispatch(createChannelAction({ name, description, select, userId }));
      setOpenedNewChannel(false);
    } else if (select === true && userPremium === false) {
      setOpenedModal(true);
    } else {
      dispatch(createChannelAction({ name, description, select, userId }));
      setOpenedNewChannel(false);
    }
  };

  return (
    <div className="modal-create-channel">
      <div className="modal-create-channel__title">
        <h2>Crear un nuevo canal</h2>
      </div>
      <div className="modal-create-channel__p">
        <p>
          Los canales son el lugar donde se comunica tu equipo. Funcionan mejor
          cuando se organizan en torno a un tema, por ejemplo #programming.
        </p>
      </div>
      <form
        className="modal-create-channel__form"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-form__div">
          <label htmlFor="channel">Nombre</label>
          <input
            type="text"
            placeholder="Nombre del canal"
            className="form-create-channel__input"
            name="channel"
            id="channel"
            {...register('name', {
              required: true,
            })}
          />
          {errors.name?.type === 'required' && (
            <p className="input__error">⚠ El campo nombre es requerido</p>
          )}
        </div>
        <div className="modal-form__div">
          <label htmlFor="channelDescription">Descripción (opcional)</label>
          <input
            type="text"
            className="form-create-channel__input"
            name="channelDescription"
            id="channelDescription"
            {...register('description', {
              required: true,
            })}
          />
          {errors.description?.type === 'required' && (
            <p className="input__error">⚠ El campo nombre es requerido</p>
          )}
          <p>¿De que trata este canal?</p>
        </div>
        <div className="modal-form__div">
          <label htmlFor="select">
            Desea crear un canal publico o privado?
          </label>
          <select
            name="select"
            id="select"
            className="modal-select__select"
            {...register('select', {
              required: true,
            })}>
            <option value="private">Privado</option>
            <option value="public">Publico</option>
          </select>
          {
            userPremium === false && <p>Debes ser premium para crear canales privados</p>
          }
        </div>
        <Modal
          opened={openedModal}
          onClose={() => setOpenedModal(false)}
          overflow="inside"
          size="md"
          zIndex={999}>
          <ModalBecomePremium />
        </Modal>
        <input
          type="submit"
          value="Enviar"
          className="form-create-channel__button"
        />
      </form>
    </div>
  );
};
