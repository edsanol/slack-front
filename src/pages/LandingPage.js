import React, { useEffect, useState } from 'react';
import { HeaderLandingPage } from '../components/HeaderLandingPage';
import { Aside } from '../components/Aside';
import { HeaderChat } from '../components/HeaderChat';
import { BoxChatMessage } from '../components/BoxChatMessage';
import { ThreadLandingPage } from '../components/ThreadLandingPage';
import { HelpLandingPage } from '../components/HelpLandingPage';
import { ProfileLandingPage } from '../components/ProfileLandingPage';
import RichInput from '../components/RichInput';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelsAction } from '../store/actions/actionsChannel';
import { startChecking } from '../store/actions/actionsAuth';
import { getUsersAction, getUsersIdAction } from '../store/actions/actionUsers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSocket } from '../hooks/useSocket';
import {
  actionsSocket,
  getAllMessagesChannelAction,
  getAllUserSocketAction,
  newMessage,
} from '../store/actions/actionsSocket';

export const LandingPage = () => {
  const dispatch = useDispatch();
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showAddChannel, setshowAddChannel] = useState(false);
  const sockets = useSocket('http://localhost:8080');

  useEffect(() => {
    dispatch(actionsSocket(sockets));
  }, [sockets, dispatch]);

  useEffect(() => {
    sockets.socket?.on('emitAllUsers', (allUsers) => {
      dispatch(getAllUserSocketAction(allUsers));
    });
  }, [sockets.socket, dispatch]);

  const showView = useSelector((state) => state.changeViewReducer.hiddenView);
  const { uid } = useSelector((state) => state.authReducer);
  const chatMessage = useSelector((state) => state.socketReducer.messages);

  useEffect(() => {
    dispatch(getUsersIdAction(uid));
    dispatch(startChecking());
    dispatch(getChannelsAction());
    dispatch(getUsersAction());
  }, [dispatch, uid]);

  useEffect(() => {
    sockets.socket?.on('sendMessageUser', (messageReceived) => {
      dispatch(newMessage(messageReceived));
    });
    sockets.socket?.on('sendMessageChannel', (messageReceived) => {
      dispatch(newMessage(messageReceived));
    });
    sockets.socket?.on('getMessagesChannel' , (messageReceivedChannel) => {
      dispatch(getAllMessagesChannelAction(messageReceivedChannel));
    })
  }, [sockets.socket]);

  return (
    <>
      <HeaderLandingPage
        setShowProfileOptions={setShowProfileOptions}
        showProfileOptions={showProfileOptions}
      />
      <main className="main__full-container">
        <Aside
          showAddChannel={showAddChannel}
          setshowAddChannel={setshowAddChannel}
        />
        <section className="main__section-main">
          <div
            className={
              showView === 'hiddenAll'
                ? 'main__div-chat-full'
                : 'main__div-chat'
            }>
            <HeaderChat />
            <div className="chat__div-message">
              {chatMessage.map((itemChat) => (
                <BoxChatMessage
                  key={itemChat._id}
                  fullName={itemChat.fullName}
                  image={itemChat.image}
                  message={itemChat.message}
                  createdAt={itemChat.createdAt}
                />
              ))}
            </div>
            <div
              className={
                showView === 'hiddenAll'
                  ? 'main__div-input-full'
                  : 'main__div-input'
              }>
              <RichInput />
            </div>
          </div>
          {showView === 'showThread' && (
            <div className="main__div-thread">
              <ThreadLandingPage />
            </div>
          )}
          {showView === 'showHelp' && (
            <div className="main__div-thread">
              <HelpLandingPage />
            </div>
          )}
          {showView === 'showProfile' && (
            <div className="main__div-thread">
              <ProfileLandingPage />
            </div>
          )}
          <ToastContainer />
        </section>
      </main>
    </>
  );
};
