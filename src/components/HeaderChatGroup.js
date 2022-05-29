import React, { useState } from 'react';
import rectangle from '../assets/images/Rectangle.png';
import rectangle1 from '../assets/images/Rectangle-1.png';
import rectangle2 from '../assets/images/Rectangle-2.png';
import '../assets/styles/components/HeaderChatGroup.scss';
import { Modal, Group } from '@mantine/core';
import { ModalMembersChannel } from './modals/ModalMembersChannel';

export const HeaderChatGroup = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="chat__header">
      <div className="chat__header-left">
        <span className="online"></span>
        <h2>
          id praesentium sint <span>&#x2b50;</span>
        </h2>
        <p>&#x1f60a;</p>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        overflow="inside"
        withCloseButton={false}
        size="lg">
        {<ModalMembersChannel title={"1,141 members in talks"} paragraph={"Add people"} />}
      </Modal>
      <div className="chat__header-right">
        <div className="chat__header-right-users">
          <img className="img-right1" src={rectangle} alt="user" />
          <img className="img-right2" src={rectangle1} alt="user" />
          <img className="img-right3" src={rectangle2} alt="user" />
        </div>
        <Group>
          <i
            className="bx bx-user-plus"
            type="button"
            onClick={() => setOpened(true)}></i>
        </Group>
      </div>
    </div>
  );
};
