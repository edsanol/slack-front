import React, { useState } from 'react';
import { ChannelMessageGroup } from './ChannelMessageGroup';
import { DirectMessageUser } from './DirectMessageUser';
import { Collapse } from '@mantine/core';

export const Aside = () => {
  const [openedChannels, setOpenChannels] = useState(true);
  const [openedChats, setOpenChats] = useState(true);
  return (
    <div className="aside-container">
      <section className="aside-section-workspace">
        <button className="aside-button-workspace-A">A</button>
        <button className="aside-button-workspace-B">B</button>
        <div className="aside-selected-button">
          <button className="aside-button-workspace-selected">C</button>
        </div>
        <button className="aside-button-workspace-plus">+</button>
      </section>

      <section className="aside-section-channels">
        <div className="aside-channels-header">
          <p>DesignersKR ⌵</p>
          <i className="fa-solid fa-pen-to-square" id="icon__header-aside"></i>
        </div>

        <aside className="aside-header-channels">
          <ul className="aside-section-channels-options">
            <li className="list-channels-options-subtitles">
              <i className="fa-solid fa-at" id="icon-channel"></i>
              <p className="p-channels-options-subtitles">
                Mentions & reactions
              </p>
            </li>
            <li className="list-channels-options-subtitles">
              <i className="fa-regular fa-bookmark" id="icon-channel"></i>
              <p className="p-channels-options-subtitles">Saved items</p>
            </li>
            <li className="list-channels-options-subtitles">
              <p>⁝</p>
              <p className="p-channels-options-subtitles">More</p>
            </li>
          </ul>

          <ul className="aside-section-channels-channels">
            <li className="list-channels-options">
              <p
                className="p-channels-options-subtitles"
                type="button"
                onClick={() => setOpenChannels((o) => !o)}>
                {openedChannels ? "▼" : "▶"}ㅤChannels
              </p>
              <Collapse
                in={openedChannels}
                transitionDuration={200}
                transitionTimingFunction="linear">
                <ul className="aside-section-channels-dropdown">
                  <ChannelMessageGroup />

                  <li className="list-channels-add-channels">
                    <button className="button-add-channels">+</button>
                    <p>Add channels</p>
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
                {openedChats ? "▼" : "▶"}ㅤDirect messages
              </p>
              <Collapse
                in={openedChats}
                transitionDuration={200}
                transitionTimingFunction="linear">
                <ul>
                  <DirectMessageUser />
                  <li className="list-channels-dropdown-direct">
                    <button className="button-add-channels">+</button>{' '}
                    <p>Add Teammates</p>
                  </li>
                  <li id="li__hidden">
                    <div></div>
                  </li>
                </ul>
              </Collapse>
            </li>
          </ul>
        </aside>
      </section>
    </div>
  );
};
