import React from 'react';

export default function TextInput({ placeholder, name, className, id, value, rows, onChange, onKeyPress, onKeyUp }){
	const TextInputStyle={
		
		fontFamily: " 'Roboto', Tahoma, 'Geneva', Verdana, sans-serif",
		maxHeight: "30vh",
		resize: "none",
		padding: "10px",
		background: "#fff",
		border: "2px solid var(--primary-color)",
		borderRadius: "20px",
		transition: "background 0.8s ease-in"
		
	}
	
	return (
		<textarea style={TextInputStyle} type="text" 
			placeholder={placeholder}
			name={name} 
			className={className}
			id={id}
			onChange={onChange}
			value={value}
			autoCapitalize= "sentences" 
			autoComplete="on"
			rows={rows} 
			onKeyPress={onKeyPress}
			onKeyUp={onKeyUp}
			required>
		</textarea>
	)

}