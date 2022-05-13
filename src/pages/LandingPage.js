import React from 'react';

import { Aside } from '../components/Aside';
import { BoxChatMessage } from '../components/BoxChatMessage';
import { ThreadChatMessage } from '../components/ThreadChatMessage';



export const LandingPage = () => {
  return (
    <>

      <Aside />
      <BoxChatMessage />
      <ThreadChatMessage />

    </>
  );
};
