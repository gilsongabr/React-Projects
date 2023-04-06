import './FormFields.css'
// import { fieldTypeIsNumber, fieldDisabled, teste} from "./helper"
// import Form from 'react-bootstrap/Form'
import React from 'react'

// type=

class FormFields extends React.Component{
    constructor(props, record, minhaFuncao) {
        super(props, record, minhaFuncao)
        this.record = {
            nome: ''
        }
        /*
        this.field = {
            addName: function (nameField) {
                this.record = { "nome": nameField }
                return this
            },
            addNumber: function (numberField) {
                this.record = { "number": numberField }
                return this
            }
        }
        */
        this.field = (id, nome) => {
            const objId = '{' + id + ':' + '{}' + '}'
            console.log(objId)
            const obj = JSON.parse(objId)
            console.log(obj)
            console.log(this.record)
            this.record = {
                ...this.record,
                id: `${id}`
            }
            return this
        }
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
        this.record: {

        }
*/
export default FormFields