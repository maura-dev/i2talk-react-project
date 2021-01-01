import React, {Component} from 'react'
import { Field } from 'formik';

export default class SexInput extends Component{

	render(){
		return(
			<Field name="sex" as="select">
                <option value="none" disabled>--Select Sex--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </Field>
        )
    }
}