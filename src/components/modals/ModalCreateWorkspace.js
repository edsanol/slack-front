import React, { useState } from 'react';
import '../../assets/styles/components/modals/ModalCreateChannel.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createWorkspaceAction } from '../../store/actions/actionsAuth';

export const ModalCreateWorkspace = ({ setopenedNewWorkspace }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let { name } = data;

    dispatch(createWorkspaceAction({ name }));

    toast.success('Workspace created successfully', {
      position: 'top-center',
      theme: 'colored',
    });
    setopenedNewWorkspace(false)
  };

  return (
    <div className="modal-create-channel">
      <div className="modal-create-channel__title">
        <h2>Create a new worksapce</h2>
      </div>
      <div className="modal-create-channel__p">
        <p>
          Channels created in a workspace will only be available in that workspace. 
          This gives you more privacy and you can better manage your projects and teams.
        </p>
      </div>
      <div className="modal-create-channel__p">
        <img className="modal_image-workspace" src="https://i.postimg.cc/SKg5wmpR/como-usar-slack.png" alt="slackteam" />
      </div>
      <form
        className="modal-create-channel__form"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="modal-form__div">
          <label htmlFor="channel">Name</label>
          <input
            type="text"
            placeholder="Workspace name"
            className="form-create-channel__input"
            name="channel"
            id="channel"
            {...register('name', {
              required: true,
            })}
          />
          {errors.name?.type === 'required' && (
            <p className="input__error">⚠ The name field is required</p>
          )}
        </div>
        <input
          type="submit"
          value="Create"
          className="form-create-channel__button"
        />
      </form>
    </div>
  );
};
