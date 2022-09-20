import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeholder = 'Email', error, name }) => (
  <>
    <div className="input-main-container">
      <div className="input-wrapper">
        <div className="input">
          <input
            type="text"
            id={name}
            name={name}
            placeholder={placeholder}
          />
        </div>
        {error && (
        <span className="input-error-massage">{error.message}</span>
        )}
      </div>
    </div>
  </>
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
