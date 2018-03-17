import React from 'react';
import { Icon, Divider } from 'semantic-ui-react';

// styles
import './ServicesTab.css';

const ServicesTab = () => {
  return (
    <div className="services-container">
      <div className="background-fill">
        <Icon name="file text outline" /> Procedures & Treatments Offered{' '}
        <Divider />
        <div>
          <li>Arthritic Conditions</li>
          <li>Arthritic Disorders</li>
          <li>Asthma</li>
          <li>Cholesterol Screening</li>
        </div>
      </div>
      <div className="background-fill-next">
        <Icon name="medkit" /> Commonly Prescribed Medications
        <Divider />
        <div>
          <li>As needed</li>
        </div>
      </div>
      <div className="background-fill-next">
        <Icon name="dollar" /> Billing Policies & Payment Options
        <Divider />
        <div>
          <h5>Sammy Chitayat, M.D. accepts the following payment methods:</h5>
          <div className="flex-row">
            <span>
              <Icon name="payment" /> <br /> Personal Check
            </span>
            <span>
              <Icon name="visa card" /> <br /> Visa
            </span>
            <span>
              <Icon name="dollar" /> <br /> Cash
            </span>
            <span>
              <Icon name="discover card" /> <br /> Discover
            </span>
            <span>
              <Icon name="mastercard" /> <br /> MasterCard
            </span>
          </div>
          <h5>
            More Info: <span>We accept Cash, Check and Credit.</span>
          </h5>
          <h5>
            Offers Financing/Payment Plans?: <span>Yes</span>
          </h5>
          <h5>
            Bills on a Sliding Scale?: <span>Unknown</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ServicesTab;
