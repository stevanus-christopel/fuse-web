import React, { Component } from 'react';

import LiquidButton from './components/LiquidButton';

import './App.css';

import svgFuseLogo from './images/logo.svg';
import pngShakaHand from './images/shaka-hand@2x.png';
import svgMailIcon from './images/icon-mail.svg';
import svgInstagramIcon from './images/icon-instagram.svg';
import svgFluidBubble from './images/fluid-bubble.svg';

const mail_service = "http://localhost:8000/";

class App extends Component {
  constructor(props) {
    super(props);

    this.sendEmail = this.sendEmail.bind(this);
  }
  componentDidMount() {
    const liquidButtons = document.querySelectorAll('.btn--liquid')
    for (let button of liquidButtons) {
      new LiquidButton(button)
    }

    setTimeout(() => {
      this.logoElement.classList.add("app__logo--show");
      this.instagramElement.classList.add("app__instagram--show");
    }, 600);
  }
  handleMouseEnterDescription = (className) => {
    document.getElementsByClassName("app__description")[0].style.color = "rgba(255, 255, 255, 0.12)";
    document.getElementsByClassName("app__instagram")[0].style.color = "rgba(255, 255, 255, 0.12)";
    document.getElementsByClassName(className)[0].style.color = "#FFFFFF";
  }
  handleMouseLeaveDescription = (className) => {
    document.getElementsByClassName("app__description")[0].style.color = "#FFFFFF";
    document.getElementsByClassName("app__instagram")[0].style.color = "#FFFFFF";
    document.getElementsByClassName(className)[0].style.color = null;
  }
  sendEmail() {
    if(document.getElementById("txt-email").value.length <= 0) {
      alert("Please fill your email.");
    } else {
      // fetch(mail_service, {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   credentials: 'include',
      //   body: JSON.stringify({
      //     email: document.getElementById("txt-email").value,
      //   }),
      // })
      // .then(response => response.json())
      // .then(response => {
      //   alert(response);
      // });
      var mailto_link = 'mailto:hello@byfuse.id?subject=Email from FUSE Website&body='+
      document.getElementById("txt-email").value+
      ' want to know more about us.';
      
      window.location.href = mailto_link;
    }
  }
  render() {
    return (
      <div className="app">
        <div className="app__content--top">
          <img className="app__logo" alt='FUSE Design Studio' src={svgFuseLogo}
            ref={(logoElement) => { this.logoElement = logoElement; }} />
          <a className="app__instagram" href="https://www.instagram.com/fuse.id/" target="_blank"
            ref={(instagramElement) => { this.instagramElement = instagramElement; }} >
            Instagram / fuse.id
          </a>

          <p className="app__description">
            FUSE is a design studio based in Jakarta, Indonesia.
            Observe not only to see,  but also catching up with the latest design
            hypes to meet your product needs.
            <span className="app__description-underline--blue"
            onMouseEnter={() => this.handleMouseEnterDescription('app__description-underline--blue')}
            onMouseLeave={() => this.handleMouseLeaveDescription('app__description-underline--blue')}>
              Exploring all the way around.
            </span>
            <br /><br />
            FUSE believes in Curiosity, Honest and Harmony to build your product in a better and superlative way. Bringing together strategy, 
            technology, and design, FUSE creates digital experience to build a meaningful
            relationship between brands, product, and user.
          </p>
        </div>

        <div className="app__content--bottom">
          <div className="app__email">
            <label htmlFor="txt-email">Describe your project. Email us!</label>

            <div className="app__email-form">
              <input type="text" id="txt-email" name="txt-email"
              placeholder="Type your Email.." />
              <button className="btn--liquid" onClick={this.sendEmail}
                data-padding="0"
                data-placeholder="Submit"
                data-textstyle="fill: #FFFFFF; font-size: 14px;"
                data-basecolor="#666666"
                data-gradient="#7b7b7b, #434442">
                  <svg></svg>
              </button>
            </div>

            <h2 className="app__content--bottom-text">SEE YOU VERY SOON</h2>

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

        <img className="app__image-fluid app__image-fluid--1" alt="" src={svgFluidBubble} />
        <img className="app__image-fluid app__image-fluid--2" alt="" src={svgFluidBubble} />
        <img className="app__image-fluid app__image-fluid--3" alt="" src={svgFluidBubble} />
        <img className="app__image-fluid app__image-fluid--4" alt="" src={svgFluidBubble} />
        <img className="app__image-fluid app__image-fluid--5" alt="" src={svgFluidBubble} />
        <img className="app__image-fluid app__image-fluid--6" alt="" src={svgFluidBubble} />
        <img className="app__image-fluid app__image-fluid--7" alt="" src={svgFluidBubble} />
        <img className="app__image-fluid app__image-fluid--8" alt="" src={svgFluidBubble} />
        <img className="app__image-fluid app__image-fluid--9" alt="" src={svgFluidBubble} />
        <img className="app__image-fluid app__image-fluid--10" alt="" src={svgFluidBubble} />
        <img className="app__image-fluid app__image-fluid--11" alt="" src={svgFluidBubble} />
        <img className="app__image-fluid app__image-fluid--12" alt="" src={svgFluidBubble} />
        <img className="app__image-fluid app__image-fluid--13" alt="" src={svgFluidBubble} />
      </div>
    );
  }
}

export default App;
