import React from 'react';
import '../styles/components/aside.css';

export const Aside = () => {
  return (
    <>
      <aside className="aside">
        <section className="aside__sectionWorkspace">
          <button className="aside__box-workspace">A</button>
          <button className="aside__box-workspace">B</button>
          <button className="aside__box-workspace">C</button>
          <button className="aside__box-workspace-plus">+</button>
        </section>
        <section className="aside__sectionChannels">
          <div className="aside__channels-header">
            <h2>DesignersKR</h2>
          </div>
          <div className="aside__header-channels">
            <ul class="aside__sectionChannels-options">
              <li class="list-channels-options">
                <a href="#" class="channels-options">
                  Mentions & reactions
                </a>
              </li>
              <li class="list-channels-options">
                <a href="#" class="channels-options">
                  Saved items
                </a>
              </li>
              <li class="list-channels-options">
                <a href="#" class="channels-options active">
                  More
                </a>
              </li>
            </ul>

            <ul class="aside__sectionChannels-channels">
              <li class="list-channels-options">
                <a class="channels-options" href="#">
                  Channels
                </a>
                <ul class="aside__sectionChannels-dropdown">
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      # Clubhouse
                    </a>
                  </li>
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      # dkr-webinar
                    </a>
                  </li>
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      # english
                    </a>
                  </li>
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      # job_posting
                    </a>
                  </li>
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      # talks
                    </a>
                  </li>
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      # uxui_design
                    </a>
                  </li>
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      # ㅤ아무말
                    </a>
                  </li>
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      Add channels
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul class="aside__sectionChannels-channels">
              <li class="list-channels-options">
                <a class="channels-options" href="#">
                  Direct messages
                </a>
                <ul class="aside__sectionChannels-dropdown">
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      jiwon
                    </a>
                    <span></span>
                  </li>
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      Alley
                    </a>
                    <span></span>
                  </li>
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      Cameron
                    </a>
                    <span class="isAbsent"></span>
                  </li>
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      hojae
                    </a>
                    <span class="isInactive"></span>
                  </li>
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      hojae
                    </a>
                    <span class="isInactive"></span>
                  </li>
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      hojae
                    </a>
                    <span class="isInactive"></span>
                  </li>
                  <li class="list-channels-options">
                    <a class="channels-options" href="#">
                      Add Teammates
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </aside>
    </>
  );
};
