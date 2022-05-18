import React, { useState } from 'react';
import { HeaderLandingPage } from '../components/HeaderLandingPage';
import { Aside } from '../components/Aside';
import { HeaderChat } from '../components/HeaderChat';
import { BoxChatMessage } from '../components/BoxChatMessage';
import { ThreadLandingPage } from '../components/ThreadLandingPage';
import { HelpLandingPage } from '../components/HelpLandingPage';
import { RichInput } from '../components/RichInput';
import { HeaderChatGroup } from '../components/HeaderChatGroup';
import { UserOptionsProfile } from '../components/UserOptionsProfile';

export const LandingPage = () => {
  const [hiddenThread, setHiddenThread] = useState(false);
  const [hiddenHelp, setHiddenHelp] = useState(true);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  return (
    <>
      <HeaderLandingPage
        setHiddenThread={setHiddenThread}
        setHiddenHelp={setHiddenHelp}
        setShowProfileOptions={setShowProfileOptions}
        showProfileOptions={showProfileOptions}
      />
      {showProfileOptions && (
        <div className="div-show-profile-optioncs">
          <UserOptionsProfile />
        </div>
      )}

      <main className="main__full-container">
        <Aside />
        <section className="main__section-main">
          <div
            className={
              hiddenThread === true || hiddenHelp === true
                ? 'main__div-chat'
                : 'main__div-chat-full'
            }>
            <HeaderChatGroup />
            <div className="chat__div-message">
              <BoxChatMessage text={'1'} />
              <BoxChatMessage />
              <BoxChatMessage />
              <BoxChatMessage
                setHiddenThread={setHiddenThread}
                setHiddenHelp={setHiddenHelp}
              />
              <BoxChatMessage />
            </div>
            <div className="chat__div-input">
              <RichInput />
            </div>
          </div>
          {hiddenThread && (
            <div className="main__div-thread">
              <ThreadLandingPage setHiddenThread={setHiddenThread} />
            </div>
          )}
          {hiddenHelp && (
            <div className="main__div-thread">
              <HelpLandingPage setHiddenHelp={setHiddenHelp} />
            </div>
          )}
        </section>
      </main>
    </>
  );
};
