import React from 'react';
import { Image, Button } from 'semantic-ui-react';

// styles
import './Header.css';

const image =
  'https://res.cloudinary.com/dn0czddtv/image/upload/v1522172994/AlemLogoFinal.svg';

export const Header = () => (
  <div className="header-container">
    <div>
      <Image src={image} />
    </div>
    <div>
      <Button content="CONTACT US" />
    </div>
  </div>
);
