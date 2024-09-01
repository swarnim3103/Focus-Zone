import React from 'react';

const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 ml-20 mr-20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-4xl font-bold mb-2 text-customBlue3">{title}</h2>
      <p className="text-gray-600 text-xl">{description}</p>
    </div>
  );
};

export default InfoCard;