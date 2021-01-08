import React from "react";

const LocationCard = ({ src, location }) => {
  return (
    <div>
      <img
        className="h-48 w-80 object-cover"
        
        image={src}
        alt={location}
      />
    </div>
  );
};

export default LocationCard;
