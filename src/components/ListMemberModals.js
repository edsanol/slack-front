import React from 'react';
import '../assets/styles/components/ListMemberModals.scss';
import '../assets/styles/components/ListChannels.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addUserToChannelAction } from '../store/actions/actionsChannel';
import { toast } from 'react-toastify';
export const ListMemberModals = ({
  name,
  image,
  email,
  occupation,
  uid,
  channels,
  setOpened,
}) => {
  const dispatch = useDispatch();
  const { activeChat } = useSelector((state) => state.socketReducer);
  const channelId = activeChat;
  const memberInChannel = uid;
  const handleClickJoin = (e) => {
    e.preventDefault();
    toast.info('added user', {
      position: 'bottom-right',
      theme: 'colored',
    });
    dispatch(addUserToChannelAction({ channelId, memberInChannel }));
    // window.location.reload(true);
    setOpened(false);
  };

  return (
    <>
      <div className="member__list list-channels__container">
        <div className="member__list-img">
          <img src={image} alt="" />
        </div>
        <div className="member__list-data">
          <h2>{name}</h2>
          <span>
            {email} ▪️ {occupation}
          </span>
        </div>

        {channels.includes(channelId) ? (
          <button className="btn__list-channels_member">Member</button>
        ) : (
          <button className="btn__list-channels" onClick={handleClickJoin}>
            Add
          </button>
        )}
      </div>
    </>
  );
};
