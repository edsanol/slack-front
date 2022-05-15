import React from 'react';
import { HeaderLandingPage } from '../components/HeaderLandingPage'
import { Aside } from '../components/Aside'
import { HeaderChat } from '../components/HeaderChat'
import { BoxChatMessage } from '../components/BoxChatMessage'
// import { ThreadLandingPage } from '../components/ThreadLandingPage';
import { HelpLandingPage } from '../components/HelpLandingPage';
import { RichInput } from '../components/RichInput';
import { ReactionChat } from '../components/ReactionChat'

export const LandingPage = () => {
  return (
    <>
      <HeaderLandingPage />

      <main className="main__full-container">
        <Aside />
        <section className="main__section-main">
          <div className="main__div-chat">
            <HeaderChat />
            <div className="chat__div-message">
              <BoxChatMessage text={"1"}/>
              <BoxChatMessage />
              <BoxChatMessage />
              <BoxChatMessage />
              <BoxChatMessage reaction={<ReactionChat />}/>
              
            </div>
            <div className="chat__div-input">
              <RichInput />
            </div>

          </div>
          <div className="main__div-thread">
            <HelpLandingPage />
            {/* <ThreadLandingPage /> */}
          </div>
        </section>
      </main>
      
    </>
  );
};
