import './FormFields.css'
// import { fieldTypeIsNumber, fieldDisabled, teste} from "./helper"
// import Form from 'react-bootstrap/Form'
import React from 'react'

// type=

class FormFields extends React.Component{
    constructor(props, record, minhaFuncao) {
        super(props, record, minhaFuncao)
        this.record = []

        this.field = (nome = 'teste', label = '', id = undefined) => {
            const field = {
                id: id,
                nome: nome,
                label: label,
                fieldWidth: 48,
            }
            this.record.push(field)
            return this
        }
    }
    render(prototype) {
        if (prototype) {
            return <div className="Form">
                { Object.keys(prototype).map((item, key) => {
                    return <div key={key} className="FormField" style={{width: prototype[item].fieldWidth ? prototype[item].fieldWidth.toString() + '%' : "10%"}}>
                        { prototype[item].label }
                        <div className="FormInput">
                            <input className="inputClass"
                            />
                        </div>
                    </div>
                })}
            </div>
        }
    }
}
export default FormFields