import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact us</h1>
        <p className="p__opensans">2 Rue Edouard Mignot 51100 Reims</p>
        <p className="p__opensans">+336-467-750-96</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo"/>
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop:15}}/>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Open Hours</h1>
        <p className="p__opensans">Lundi - Vendredi</p>
        <p className="p__opensans">8h00 - 22h00</p>
        <p className="p__opensans">Samedi</p>
        <p className="p__opensans">8h00 - 2h00</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans"> 2021 Gericht. All right reserved.</p>
    </div>
  </div>
);

export default Footer;
