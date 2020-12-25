import React from 'react';

export default function TextInput({ placeholder, name, className, id, value, rows, onChange }){

	/*onChange=(e)=>{
		this.setState({
			[e.target.name]: e.target.value,
			errors:{}
		});
		document.getElementById("error").style.display="none"

		var autoExpand = function (field) {

		// Reset field height
		field.style.height = 'inherit';

		// Calculate the height
		var height = field.scrollHeight - 19
		             
		field.style.height = height + 'px';

		};

		document.addEventListener('input', function (event) {
			if (event.target.tagName.toLowerCase() !== 'textarea') return;
			autoExpand(event.target);
		}, false);
	}*/
	
	return (
		<textarea type="text" 
			placeholder={placeholder}
			name={name} 
			className={className}
			id={id}
			onChange={onChange}
			value={value}
			autoCapitalize= "sentences" 
			autoComplete="on"
			rows={rows} 
			required>
		</textarea>
	)

}