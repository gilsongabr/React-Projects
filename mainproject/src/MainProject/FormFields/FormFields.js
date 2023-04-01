import './FormFields.css'
import { fieldTypeIsNumber, fieldDisabled, teste} from "./helper"
// import Form from 'react-bootstrap/Form'

// type=
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

export default FormFields