import React from "react";
import ApplePodcast from "../assets/desktop/apple-podcast.svg";
import GooglePodcast from "../assets/desktop/google-podcasts.svg";
import SpotifyPodcast from "../assets/desktop/spotify.svg";
import PocketCasts from "../assets/desktop/pocket-casts.svg";

import "./Modal.css";

const icons = [SpotifyPodcast, ApplePodcast, GooglePodcast, PocketCasts];

const Modal = () => {
  return (
    <div className="modal">
      <h1 className="modal__title">
        <span className="modal__title-green">Publish your podcasts </span>
        <br />
        everywhere.
      </h1>
      <p className="modal__text">
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <div className="modal__email">
        <input
          type="email"
          placeholder="Email address"
          className="modal__input"
        />
        <button type="submit" className="modal__button">
          Request Access
        </button>
      </div>
      <div className="modal__icons">
        {icons.map((icon, index) => (
          <img src={icon} key={index} alt="icons" className="modal__icon" />
        ))}
      </div>
    </div>
  );
};

export default Modal;
