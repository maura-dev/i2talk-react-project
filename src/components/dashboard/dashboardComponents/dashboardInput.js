import React from 'react';

export default function DashboardInput({ onChange, value, name, placeholder }){
	
	return (
		<input type="text" onChange={onChange} value={value} name={name} placeholder={placeholder} className="searchInput"/>

	)

}