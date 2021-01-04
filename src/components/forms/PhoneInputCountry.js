import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PhoneInput from 'react-phone-number-input';

import 'react-phone-number-input/style.css';

const PhoneInputCountry = (props) => {
  const {
    field: { name, value },
    form: {
      handleBlur, setFieldValue, touched,
    },
    form,
    label,
    country,
    onChange,
    disabled,
  } = props;

  const [isFocused, setFocused] = useState(false);
  const handleInputBlur = (e) => {
    setFocused(false);
    handleBlur(e);
  };

  const handleInputFocus = () => setFocused(true);

  const onValueChange = (phoneNumber) => {
    setFieldValue(name, phoneNumber);

    if (onChange !== null) {
      onChange(phoneNumber);
    }
  };


  return (
    
    <PhoneInput
      placeholder="Enter your phone number"
      name={name}
      value={value}
      onChange={onValueChange}
      defaultCountry="NG"
    />
      
  );
};

PhoneInputCountry.propTypes = {
  form: PropTypes.any.isRequired,
  field: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

PhoneInputCountry.defaultProps = {
  label: '',
  onChange: null,
  disabled: false,
};

export default PhoneInputCountry;