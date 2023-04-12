import './FormFields.css'
// import { fieldTypeIsNumber, fieldDisabled, teste} from "./helper"
// import Form from 'react-bootstrap/Form'
import React from 'react'

// type=

class FormFields extends React.Component{
    constructor(props, record, minhaFuncao) {
        super(props, record, minhaFuncao)
        this.record = []
        this.form = {}

        this.field = (nome = 'teste', label = '', id = undefined) => {
            const field = {
                id: id,
                nome: nome,
                label: label,
                fieldWidth: 10,
            }
            this.form = field
            this.record.push(this.form)
            return this
        }
        this.fieldFormWidth = (width) => {
            this.form.fieldWidth = width
            return this
        }
    }
    render(prototype) {
        if (prototype) {
            return <div className="Form">
                { Object.keys(prototype).map((item, key) => {
                    return <div key={key} className="FormField" style={{width: prototype[item].fieldWidth ? 'calc(' + prototype[item].fieldWidth.toString() + '% - 10px)' : "calc(10% -10px)"}}>
                        { prototype[item].label }
                        <div className="FormInput">
                            <input className="inputClass" />
                        </div>
                    </div>
                })}
            </div>
        }
    }
}
export default FormFields

/*
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" aria-labelledby="Default" />
                        </div>
 */