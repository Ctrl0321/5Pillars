import React, { useState } from "react";
import defaultImage from "../images/members/default_member.jpg";
import "../Css/AboutUs.css";

const StaffMember = ({ name, position, photo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="staff-member" onClick={handleOpenModal}>
        <div className="photo">
          <img src={photo || defaultImage} alt="Staff Photo" />
        </div>
        <div className="info">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={photo || defaultImage} alt="Staff Photo" />
            <div className="info">
              <h3>{name}</h3>
              <p>{position}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StaffMember;
