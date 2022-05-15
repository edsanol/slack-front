import React from 'react';
import '../assets/styles/components/RichInput.scss';

export const RichInput = () => {
  return (
    <div className="container-input-chat">
      <div>
        <textarea placeholder="Write something.."></textarea>
      </div>
      <div className="container-icon-link">
        <div className="container-icon-text">
          <a href="#header" className="icon-link" id="lightning">
            <i className="fa-solid fa-bolt-lightning"></i>
            <div className="v-line"></div>
          </a>
          <a href="#header" className="icon-link icon-text">
            <i className="fa-solid fa-bold"></i>
          </a>
          <a href="#header" className="icon-link">
            <i className="fa-solid fa-italic"></i>
          </a>
          <a href="#header" className="icon-link">
            <i className="fa-solid fa-strikethrough"></i>
          </a>
          <a href="#header" className="icon-link">
            <i className="fa-solid fa-code"></i>
          </a>
          <a href="#header" className="icon-link">
            <i className="fa-solid fa-link"></i>
          </a>
          <a href="#header" className="icon-link">
            <i className="fa-solid fa-list-ol" id="thread__icon-hidden"></i>
          </a>
          <a href="#header" className="icon-link">
            <i className="fa-solid fa-list" id="thread__icon-hidden"></i>
          </a>
          <a href="#header" className="icon-link">
            <i className="fa-solid fa-ellipsis" id="thread__icon-hidden"></i>
          </a>

          <a href="#header" className="icon-link">
            <i className="fa-solid fa-font-case"></i>
          </a>
        </div>
        <div>
          <a href="#header" className="icon-link">
            <i className="fa-solid fa-at" id="thread__icon-hidden"></i>
          </a>
          <a href="#header" className="icon-link">
            <i className="fa-solid fa-face-smile"></i>
          </a>
          <a href="#header" className="icon-link">
            <i className="fa-solid fa-paper-plane"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
