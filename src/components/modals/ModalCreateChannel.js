import React from 'react';
import '../../assets/styles/components/modals/ModalCreateChannel.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createChannelAction } from '../../store/actions/actionsChannel';

export const ModalCreateChannel = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const userId = useSelector((state) => state.authReducer.uid);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { name, description } = data;
    //console.log(data, userId);
    dispatch(createChannelAction({ name, description, userId }));
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
        <input
          type="submit"
          value="Enviar"
          className="form-create-channel__button"
        />
      </form>
    </div>
  );
};
