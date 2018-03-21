import React from 'react';
import { Icon, Divider } from 'semantic-ui-react';

// styles
import './LocationTab.css';

const image = 'http://res.cloudinary.com/dlqcyupez/image/upload/v1520363908/img.jpg';

const LocationTab = () => {
  return (
    <div className="location-container">
      <Icon name="hospital" />Affiliated Practices
      <Divider />
      <div className="affiliate-info">
        <div>
          <img src={image} alt="doctor-image" />
        </div>

        <div className="right">
          <span>
            <a>Sammy Chitayat, MD, FACP</a>
          </span>{' '}
          <br /> <br />
          <span>
            16 E 52nd St Suite 403 <br /> New York, NY, 10022
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocationTab;
