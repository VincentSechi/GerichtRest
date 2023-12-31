import React from 'react';

import{images} from '../../constants';
import{SubHeading} from '../../components';


const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className="headtext__cormorant" style={{marginBottom :'3rem'}}>Find us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">2 rue Edouard Mignot 51100 Reims</p>
        <p className="p__cormorant" style={{color:'#DCCA87', margin: '2rem 0'}}>Heures d'ouverture</p>
        <p className="p__opensans">Lundi - Vendredi : 10h00 - 22h00</p>
        <p className="p__opensans">Samedi - Dimanche : 10h00 - 2h00</p>
      </div>
      <button type="button" className="custom__button" style={{marginTop:'2rem'}}>Visit us</button>
    </div>


    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus"/>
    </div>
  </div>
);

export default FindUs;
