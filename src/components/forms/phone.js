import React, {useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberInt1, isValidPhoneNumber } from 'react-phone-number-input'
import { getIn } from 'formik'
import PropTypes from 'prop-types'

export default function PhoneInputField(props) {
	/*const [value, setValue]= useState()
	return(
		<PhoneInput
		    international
		    placeholder="Enter phone number"
		    value={value}
		    onChange={setValue}
			defaultCountry="NG"
			countryCallingCodeEditable={false}
			error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid Phone Number') : 'Phone Number required'}
		 />
	)*/
	//{value&& formatPhoneNumber(value)}
  const {
  	className,
  	field: {
  	 name, 
  	 value, 
  	},

  	form:{ errors,handleBlur,setFieldValue,touched,} ,
  	form,
  	label,
  	onChange,
  	disabled,
  } = props

  //const {name, value}= this.props.field
  //const{errors, handleBlur, setFieldValue, touched}= this.props.form

  const [isFocused, setFocused] = useState(false);
  const isError = getIn(touched, name) && getIn(errors, name);
  const errorStyle= isError ? 'error' : '';
  const filledStyle= (isFocused || value) ? 'filled' : '';
  const disabledStyle= disabled ? 'disabled' : '';

  const handleInputBlur= (e) => {
  	setFocused(false);
  	handleBlur(e)
  }


  const onValueChange= (phoneNumber) =>{
  	setFieldValue(name,phoneNumber);

  	if(onChange !== null){
  		onChange(phoneNumber)
  	}
  };

  return (
  	<div className={`${className} ${errorStyle} ${filledStyle} ${disabledStyle} text-input-group`}>
	    <PhoneInput
	      name={props.field.name}
	      placeholder="Enter phone number"
	      value={props.field.value}
	      onChange={onValueChange}

	    />

	    <label htmlFor={name}>{label}</label>
	    <div className=" flex h-5 items-end text-red-100 text-xs">
	    	{isError && getIn(errors, name)}
	    </div>
	</div>
  )
}

PhoneInputField.propTypes={
	name: PropTypes.string,
	className: PropTypes.string,
	form: PropTypes.any.isRequired,
	field: PropTypes.any.isRequired,
	onChange: PropTypes.func,
	label: PropTypes.string,
	disabled: PropTypes.bool,
};

PhoneInputField.defaultProps={
	className:'',
	name:"phone",
	label:"",
	onChange: null,
	disabled: false,
};
