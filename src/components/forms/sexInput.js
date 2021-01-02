import React, {Component} from 'react'
import { Field } from 'formik';

export default class SexInput extends Component{

	render(){
		return(
			<Field name="sex" as="select">
                <option value="none">--Select Sex--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </Field>
        )
    }
}