import React from 'react';
import image from '../images/footer/if_instagram_317738.png';
import image2 from '../images/footer/if_square-facebook_317727.png';
import image3 from '../images/footer/if_square-linkedin_317725.png';


const Footer = props => {
  return (
    <div>
      <img src={image} alt="linked in" />
      <img src={image2} alt="facebook" />
      <img src={image3} alt="instgram" />
    </div>
  )
}

export default Footer;
