//import React from "react";
import PropTypes from "prop-types";

const ServiceProvider = ({ provider }) => {
  return (
    <div>
      <h2>{provider.name}</h2>
      <p>Location: {provider.location}</p>
      <p>Rating: {provider.rating}</p>
      <p>Pincode: {provider.pincode}</p>
    </div>
  );
};
ServiceProvider.propTypes = {
  provider: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    pincode: PropTypes.number.isRequired,
  }).isRequired,
};
export default ServiceProvider;
