import React, { useState } from 'react';
import { HeaderLandingPage } from '../components/HeaderLandingPage';
import { Aside } from '../components/Aside';
import { HeaderChat } from '../components/HeaderChat';
import { BoxChatMessage } from '../components/BoxChatMessage';
import { ThreadLandingPage } from '../components/ThreadLandingPage';
import { HelpLandingPage } from '../components/HelpLandingPage';
import { ProfileLandingPage } from '../components/ProfileLandingPage';
import RichInput from '../components/RichInput';
import { HeaderChatGroup } from '../components/HeaderChatGroup';
import { UserOptionsProfile } from '../components/UserOptionsProfile';
import { useSelector } from 'react-redux';
import chat from '../assets/mocks/chat.json';
import { AddChannelOptions } from '../components/AddChannelOptions';

export const LandingPage = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showAddChannel, setshowAddChannel] = useState(false);

  const showView = useSelector((state) => state.hiddenView);

  return (
    <>
      <HeaderLandingPage
        setShowProfileOptions={setShowProfileOptions}
        showProfileOptions={showProfileOptions}
      />
      {showProfileOptions && (
        <div className="div-show-profile-optioncs">
          <UserOptionsProfile />
        </div>
      )}

      <main className="main__full-container">
        <Aside showAddChannel={showAddChannel} setshowAddChannel={setshowAddChannel}/>
        {showAddChannel && (
          <div className="div-show-add-channel-options">
            <AddChannelOptions />
          </div>
        )}
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
