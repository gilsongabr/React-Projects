import './FormFields.css'
// import { fieldTypeIsNumber, fieldDisabled, teste} from "./helper"
// import Form from 'react-bootstrap/Form'
import React from 'react'
import Home from "../../CRUD/Home";

// type=

class FormFields extends React.Component{
    constructor(props) {
        super(props)
    }
    render(prototype) {
        if (prototype) {
            return <div>
                { Object.keys(prototype).map((item, key) => {
                    return <div key={key}> { prototype[item] } </div>
                }) }
            </div>
        }
    }
}

/*
function FormFields(props) {
    return <div className="FormLabel" style={{width: props.fieldWidth ? props.fieldWidth.toString() + '%' : "10%"}}>
        {props.fieldName ? props.fieldName : ''}
        <div className="FormField">
            <input className="input-group"
                   disabled={props.fieldType === 'disabled'  || props.fieldId === 'id'}
                   type={props.fieldType}
            />
        </div>
    </div>
}
*/
export default FormFields