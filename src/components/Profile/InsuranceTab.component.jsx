import React from 'react';
import { Icon, Divider } from 'semantic-ui-react';

// styles
import './InsuranceTab.css';

const InsuranceTab = () => {
  return (
    <div className="insurance-container">
      <Icon name="heartbeat" />Accepted Insurance <Divider />
      <div>We accept most insurances, please call to verify.</div>
    </div>
  );
};

export default InsuranceTab;
