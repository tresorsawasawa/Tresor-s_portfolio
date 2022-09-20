import React from 'react';
import PropTypes from 'prop-types';

const Texterea = ({ name, placeholder, error }) => (
  <div className="textarea-input-main-container">
    <div className="input-wrapper">
      <div className="textarea">
        <textarea name={name} id={name} placeholder={placeholder} />
      </div>
      {error && <span className="input-error-massage">{error.message}</span>}
    </div>
  </div>
);

Texterea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Texterea;
