import React from 'react';

// styles
import './FindProfileCard.css';

const image = 'http://res.cloudinary.com/dlqcyupez/image/upload/v1520363908/img.jpg';

const FindProfileCard = () => {
  return (
    <div className="userlist">
      <ul>
        <li>
          <img className="user-pic" src={image} />
          <div className="user-title">
            <h2> Sammy Chitaya, M.D. </h2>
            <span> Internist - General </span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default FindProfileCard;
