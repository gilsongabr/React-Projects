import './FormFields.css'
// import Form from 'react-bootstrap/Form'
function FormFields(props) {
    // console.log(props)
    return <div className="FormLabel" style={{width: props.fieldWidth ? props.fieldWidth.toString() + '%' : "10%"}}>
        {props.fieldName}
        <div className="FormField">
            <input className="inputClass" />
        </div>
        <div>
            fieldId = {props.fieldId}
        </div>
    </div>
}

export default FormFields