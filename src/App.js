import React, { Component } from 'react';
import './App.css';

import svgFuseLogo from './images/logo.svg';
import pngShakaHand from './images/shaka-hand@2x.png';
import svgMailIcon from './images/icon-mail.svg';
import svgInstagramIcon from './images/icon-instagram.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__content--top">
          <img className="app__logo" alt='FUSE Design Studio' src={svgFuseLogo} />
          <a className="app__instagram" href="https://www.instagram.com/fuse.id/" target="_blank">
            Instagram / fuse.id
          </a>

          <p className="app__description">
            FUSE is a design studio based in Jakarta, Indonesia observe not only see, catching up with the latest design hypes to meet your product needs, <span className="app__description-underline--blue">exploring all the way around</span>.
            <br /><br />
            FUSE believe in consistency, efficiency, and blabla to build, to gain
            your product in a better way, superlative way. <span className="app__description-underline--purple">Bringing together strategy,</span> technology, and design we create digital experience to create a meaningful relationship between brands, product, and user.
          </p>
        </div>

        <div className="app__content--bottom">
          <div className="app__email">
            <label for="txt-email">Describe your project. Email us!</label>

            <div className="app__email-form">
            <input type="text" id="txt-email" name="txt-email"
            placeholder="Type your Email.." />
            <button>Submit</button>
            </div>

            <h2>SEE YOU VERY SOON</h2>

            <img className="app__content--bottom-image" alt="FUSE Design Studio" src={pngShakaHand} />
          </div>
        </div>

        <div className="app__footer">
          <div className="app__footer-copyright">
            © Fuse Design Studio 2018
          </div>
          <div className="app__footer-contact">
            <a href="mailto:hello@byfuse.id">
              <img alt="FUSE Email" src={svgMailIcon} />
              hello@byfuse.id
            </a>
            <a href="https://www.instagram.com/fuse.id/" target="_blank">
              <img alt="FUSE Instagram" src={svgInstagramIcon} />
              instagram.com/fuse.id
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
