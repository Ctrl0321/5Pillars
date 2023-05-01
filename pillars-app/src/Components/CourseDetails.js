import React from 'react';
import PropTypes from 'prop-types';
import '../Css/CourseDetails.css'

const CourseDetails = ({ imageSrc, heading, text, isComingSoon }) => {
  const overlayText = isComingSoon ? 'Coming Soon' : heading;
  return (
    <div className="course-details">
      <div className="course-image">
        <img src={imageSrc} alt={heading} />
        <div className={`image-overlay ${isComingSoon ? 'coming-soon' : ''}`}>
          {overlayText}
        </div>
      </div>
      <div className="course-info">
        <h2 className="course-heading">{heading}</h2>
        <p className="course-text">{text}</p>
      </div>
    </div>
  );
};

CourseDetails.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isComingSoon: PropTypes.bool,
};

CourseDetails.defaultProps = {
  isComingSoon: false,
};

export default CourseDetails;
