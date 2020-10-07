import React from 'react';
import PropTypes from 'prop-types';

import { GroupContainer, Input, InputLabel } from './form-input.style';

const FormInput = ({ handleChange, handleBlur, label, ...otherProps }) => (
  <GroupContainer>
    <Input onChange={handleChange} onBlur={handleBlur} {...otherProps} required />
    <InputLabel label={label} value={otherProps.value}>
      {label}
    </InputLabel>
  </GroupContainer>
);

FormInput.propTypes = {
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  label: PropTypes.string
};

export default FormInput;
