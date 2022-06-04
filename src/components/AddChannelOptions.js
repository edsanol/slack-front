import React, { useState } from 'react';
import '../assets/styles/components/AddChannelOptions.scss';
import { Group, Modal } from '@mantine/core';
import { ModalMembersChannel } from './modals/ModalMembersChannel';
import { ModalCreateChannel } from './modals/ModalCreateChannel';

export const AddChannelOptions = () => {
  const [opened, setOpened] = useState(false);
  const [openedNewChannel, setOpenedNewChannel] = useState(false);
  return (
    <div className="channel-options__container">
      <div className="channel-options__options">
        <p type="button" onClick={() => setOpenedNewChannel(true)}>
          Crear nuevo canal
        </p>
      </div>
      <Modal
        opened={openedNewChannel}
        onClose={() => setOpenedNewChannel(false)}
        overflow="inside"
        withCloseButton={false}
        size="md"
        zIndex={999}>
        {
          <ModalCreateChannel
            title={'Add new channel'}
            paragraph={'Add channel'}
          />
        }
      </Modal>
      <div className="channel-options__options">
        <p type="button" onClick={() => setOpened(true)}>
          Explorar la lista de canales
        </p>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        overflow="inside"
        withCloseButton={false}
        size="lg"
        zIndex={999}>
        {
          <ModalMembersChannel
            title={'Add new channel'}
            paragraph={'Add channel'}
          />
        }
      </Modal>
    </div>
  );
};
