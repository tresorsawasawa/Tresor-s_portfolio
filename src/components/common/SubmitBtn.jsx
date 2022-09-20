import React from 'react';
import PropTypes from 'prop-types';

const SubmitBtn = ({ message }) => (
  <button type="submit" className="submit-bnt">
    {message}
  </button>
);

SubmitBtn.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SubmitBtn;
