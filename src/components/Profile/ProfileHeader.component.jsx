import React from 'react';
import { Button, Icon, Breadcrumb } from 'semantic-ui-react';

import './ProfileHeader.css';

const ProfileHeader = props => {
  const handleClick = () => {
    props.history.push('/find-a-doctor');
  };

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Section link onClick={handleClick}>
          Home
        </Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>Dr. Sammy Chitayat </Breadcrumb.Section>
      </Breadcrumb>
      <Button icon size="small" className="back-to-results-button" onClick={handleClick}>
        <Icon name="reply" />
        Back To Results
      </Button>
    </div>
  );
};

export default ProfileHeader;
