import React, { useEffect, useState } from 'react';
import { HeaderLandingPage } from '../components/HeaderLandingPage';
import { Aside } from '../components/Aside';
import { HeaderChat } from '../components/HeaderChat';
import { BoxChatMessage } from '../components/BoxChatMessage';
import { ThreadLandingPage } from '../components/ThreadLandingPage';
import { HelpLandingPage } from '../components/HelpLandingPage';
import { ProfileLandingPage } from '../components/ProfileLandingPage';
import RichInput from '../components/RichInput';
import { HeaderChatGroup } from '../components/HeaderChatGroup';
import { useDispatch, useSelector } from 'react-redux';
import chat from '../assets/mocks/chat.json';
import { getChannelsAction } from '../store/actions/actionsChannel';

export const LandingPage = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showAddChannel, setshowAddChannel] = useState(false);

  const showView = useSelector((state) => state.changeViewReducer.hiddenView);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChannelsAction());
  }, []);

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
            <HeaderChatGroup />
            <div className="chat__div-message">
              {chat.map((itemChat) => (
                <BoxChatMessage
                  key={itemChat.id}
                  name={itemChat.name}
                  comment={itemChat.comment}
                  avatar={itemChat.avatar}
                  time={itemChat.time}
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
        </section>
      </main>
    </>
  );
};
