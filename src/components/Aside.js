import React, { useState } from 'react';
import { ChannelMessageGroup } from './ChannelMessageGroup';
import { DirectMessageUser } from './DirectMessageUser';
import { Collapse } from '@mantine/core';
import { Group, Modal } from '@mantine/core';
import { PopoverAddChannel } from './PopoverAddChannel';
import { useSelector } from 'react-redux';
import { ModalListUsers } from './modals/ModalListUsers';

export const Aside = ({ showAddChannel, setshowAddChannel }) => {
  const [openedChannels, setOpenChannels] = useState(true);
  const [openedChats, setOpenChats] = useState(true);
  const [opened, setOpened] = useState(false);

  const handleClickChannel = () => {
    showAddChannel ? setshowAddChannel(false) : setshowAddChannel(true);
  };

  const hiddenScroll = useSelector(
    (state) => state.changeStateReducer.hiddenScroll
  );
  const channelsByUser = useSelector((state) => state.channelReducer.channels);
  const channelsloading = useSelector((state) => state.channelReducer.loading);
  const memberInChannel = useSelector(state => state.authReducer.uid)

  return (
    <div className="aside-container">
      <section className="aside-section-workspace">
        <div className="aside-selected-button">
          <button className="aside-button-workspace-selected">A</button>
        </div>
        <button className="aside-button-workspace-plus">+</button>
      </section>

      <section className="aside-section-channels">
        <div className="aside-channels-header">
          <p>DesignersKR ⌵</p>
        </div>

        <aside
          className={
            hiddenScroll
              ? 'aside-header-channels-hidden'
              : 'aside-header-channels'
          }>
          <ul className="aside-section-channels-options">
            <li className="list-channels-options-subtitles">
              <i className="fa-regular fa-bookmark" id="icon-channel"></i>
              <p className="p-channels-options-subtitles">Saved items</p>
            </li>
          </ul>

          <ul className="aside-section-channels-channels">
            <li className="list-channels-options">
              <p
                className="p-channels-options-subtitles"
                type="button"
                onClick={() => setOpenChannels((o) => !o)}>
                {openedChannels ? '▼' : '▶'}ㅤChannels
              </p>
              <Collapse
                in={openedChannels}
                transitionDuration={0}
                transitionTimingFunction="linear">
                <ul className="aside-section-channels-dropdown">
                  {channelsloading
                    ? 'Cargando...'
                    : channelsByUser
                      .filter(channels => channels.users.includes(memberInChannel))
                      .map((channel) => {
                        return (
                          <ChannelMessageGroup
                            key={channel._id}
                            name={channel.name}
                          />
                        );
                      })}

                  <li className="list-channels-add-channels">
                    <button
                      className="button-add-channels"
                      type="button"
                      onClick={handleClickChannel}>
                      +
                    </button>
                    <PopoverAddChannel />
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>

          <ul className="aside-section-channels-directs">
            <li className="list-channels-options">
              <p
                className="p-channels-options-subtitles"
                type="button"
                onClick={() => setOpenChats((o) => !o)}>
                {openedChats ? '▼' : '▶'}ㅤDirect messages
              </p>
              <Collapse
                in={openedChats}
                transitionDuration={0}
                transitionTimingFunction="linear">
                <ul>
                  <DirectMessageUser />
                  <li className="list-channels-dropdown-direct">
                    <button className="button-add-channels">+</button>{' '}
                    <Group>
                      <p type="button" onClick={() => setOpened(true)}>
                        Add Teammates
                      </p>
                    </Group>
                  </li>
                  <li id="li__hidden">
                    <div></div>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            overflow="inside"
            withCloseButton={false}
            size="lg">
            {
              <ModalListUsers />
            }
          </Modal>
        </aside>
      </section>
    </div>
  );
};
