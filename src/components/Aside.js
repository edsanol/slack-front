import React from 'react';
import rectangle1 from '../assets/images/Rectangle-1.png';
import rectangle2 from '../assets/images/Rectangle-2.png';
import rectangle4 from '../assets/images/Rectangle.png';

export const Aside = () => {
  return (
    <>
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
            <i class="fa-solid fa-pen-to-square"></i>
          </div>

          <aside className="aside-header-channels">
            <ul className="aside-section-channels-options">
              <li className="list-channels-options-subtitles">
                <i className="fa-solid fa-at"></i>
                <p className="p-channels-options-subtitles">
                  Mentions & reactions
                </p>
              </li>
              <li className="list-channels-options-subtitles">
                <i className="fa-regular fa-bookmark"></i>
                <p className="p-channels-options-subtitles">Saved items</p>
              </li>
              <li className="list-channels-options-subtitles">
                <p>⁝</p>
                <p className="p-channels-options-subtitles">More</p>
              </li>
            </ul>

            <ul className="aside-section-channels-channels">
              <li className="list-channels-options">
                <p className="p-channels-options-subtitles">⌵ Channels</p>
                <ul className="aside-section-channels-dropdown">
                  <li className="list-channels-dropdown">
                    <p className="list-channels-name"># Clubhouse</p>
                  </li>
                  <li className="list-channels-dropdown">
                    <p className="list-channels-name"># dkr-webinar</p>
                  </li>
                  <li className="list-channels-dropdown">
                    <p className="list-channels-name"># english</p>
                  </li>
                  <li className="list-channels-dropdown">
                    <p className="list-channels-name"># job_posting</p>
                  </li>
                  <li className="list-channels-dropdown">
                    <p className="list-channels-name"># talks</p>
                  </li>
                  <li className="list-channels-dropdown">
                    <p className="list-channels-name"># uxui_design</p>
                  </li>
                  <li className="list-channels-dropdown">
                    <p className="list-channels-name"># 아무말</p>
                  </li>
                  <li className="list-channels-add-channels">
                    <button className="button-add-channels">+</button>
                    <p>Add channels</p>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="aside-section-channels-directs">
              <li className="list-channels-options">
                <p className="p-channels-options-subtitles">
                  ⌵ Direct messages
                </p>
                <ul>
                  <li className="list-channels-dropdown-direct">
                    <img src={rectangle1} alt="rec1" />
                    <p className="list-channels-name-directs">jiwon</p>
                    <p className="p-user-slack">you</p>
                    <span className="span-user-active"></span>
                  </li>
                  <li className="list-channels-dropdown-direct">
                    <img src={rectangle2} alt="rec1" />
                    <p className="list-channels-name-directs">Cameron</p>
                    <span className="span-user-active"></span>
                  </li>
                  <li className="list-channels-dropdown-direct">
                    <img src={rectangle4} alt="rec1" />
                    <p className="list-channels-name-directs">hojae</p>
                    <span className="span-user-desactive"></span>
                  </li>
                  <li className="list-channels-dropdown-direct">
                    <button className="button-add-channels">+</button>{' '}
                    <p>Add Teammates</p>
                  </li>
                </ul>
              </li>
            </ul>
          </aside>
        </section>
      </div>
    </>
  );
};
