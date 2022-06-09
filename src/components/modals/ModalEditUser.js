import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import '../../assets/styles/components/modals/ModalEditUser.scss';
import { updateUserProfileAction } from '../../store/actions/actionUsers';
import { toast } from 'react-toastify';

export const ModalEditUser = ({ setOpened }) => {
  const { fullName, description, phone, occupation } = useSelector(
    (state) => state.userReducer.user
  );
  const user = useSelector((state) => state.userReducer.user);

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      fullName: fullName,
      description: description,
      phone: phone,
      occupation: occupation,
    },
  });

  const onSubmit = async (data) => {
    const userUpdated = { ...user, ...data };
    try {
      await dispatch(updateUserProfileAction(userUpdated));
      toast.success('Perfil actualizado', {
        position: 'bottom-right',
        theme: 'colored',
      });
      setOpened(false);
    } catch (err) {
      toast.error('Ocurrio un error', {
        position: 'bottom-right',
        theme: 'colored',
      });
      console.log(err);
    }
  };
  return (
    <form className="modal-user-edit" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="title">Edit your profile</h1>
      <div className="container-edit-input">
        <div className="container-input containerA">
          <div className="subcontainer-input">
            <label htmlFor="fullName">Fullname</label>
            <input
              className="mainForm__form-input"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="add your full name"
              {...register('fullName', {
                required: true,
                pattern: /^[a-z\d A-Z\d]{6,30}$/i,
              })}
            />
            {errors.fullName?.type === 'required' && (
              <p className="input__error">⚠ El campo nombre es requerido</p>
            )}
            {errors.fullName?.type === 'pattern' && (
              <p className="input__error">
                ⚠ Enter full Name of minimum 6 characters and maximum 30
              </p>
            )}
          </div>
          <div className="subcontainer-input">
            <label htmlFor="occupation">Occupation</label>
            <input
              type="text"
              name="occupation"
              id="occupation"
              placeholder="Enter your occupation"
              {...register('occupation', {
                pattern: /^[a-z\d A-Z\d]{6,30}$/i,
              })}
            />
            {errors.occupation?.type === 'pattern' && (
              <p className="input__error">
                ⚠ Enter occupation of minimum 6 characters and maximum 30
              </p>
            )}
            <p>You can mention your career or skills here.</p>
          </div>
          <div className="subcontainer-input">
            <label htmlFor="description">Description</label>
            <input
              type="description"
              name="description"
              id="description"
              placeholder="Tell us about you"
              {...register('description', {
                pattern: /^[a-z\d A-Z\d]{6,100}$/i,
              })}
            />
            {errors.description?.type === 'pattern' && (
              <p className="input__error">
                ⚠ Enter description of minimum 6 characters and maximum 100
              </p>
            )}
          </div>
          <div className="subcontainer-input">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Add your cell phone"
              {...register('phone', {
                pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
              })}
            />
            {errors.phone?.type === 'pattern' && (
              <p className="input__error">⚠ Enter only numbers</p>
            )}
          </div>
        </div>
        <div className="container-submit-image containerB">
          <div>
            <p>Profile Image</p>
            <img
              src="https://images.cults3d.com/yPjnhYzpd_6MZRbXv91lHSk1-Do=/516x516/https://files.cults3d.com/uploaders/19014637/illustration-file/357d0404-63e6-4ef4-91b0-e4dec1bb02ee/4f73455cebdd51062bf02270fc22110a.jpg"
              alt="edit you profile' photo"
            />
          </div>
          <div className="button-edit">
            <button className="button-upload button-transparent">
              Update image
            </button>
          </div>
        </div>
      </div>
      <footer className="button-footer">
        <button type="submit" className="button-submit button-save">
          Save Changes
        </button>
      </footer>
    </form>
  );
};
