import './FormFields.css'
// import { fieldTypeIsNumber, fieldDisabled, teste} from "./helper"
import Form from 'react-bootstrap/Form'
import React from 'react'

// type=

class FormFields extends React.Component{
    constructor(props, record) {
        super(props, record)
        this.record = []
        this.form = {}
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            value: ''
        }

        this.field = (nome = 'teste', label = '', id = undefined) => {
            const field = {
                id: id,
                nome: nome,
                label: label,
                fieldWidth: 10,
                fieldFormDisable: false,
                fieldIsNumber: false
            }
            this.form = field
            this.record.push(this.form)
            return this
        }
        this.fieldFormWidth = (width) => {
            this.form.fieldWidth = width
            return this
        }
        this.fieldFormDisable = (disable?: true | false | undefined) => {
            if (disable === false) {
                this.form.fieldFormDisable = false
                return this
            }
            this.form.fieldFormDisable = true
            return this
        }
        this.fieldIsNumber = (isNumber?: true | false | undefined) => {
            if (isNumber === false) {
                this.form.fieldIsNumber = false
                return this
            }
            this.form.fieldIsNumber = true
            return this
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }
    render(prototype) {
        if (prototype) {
            return <Form className="Form">
                { Object.keys(prototype).map((item, key) => {
                    return <Form.Group key={key} className="FormField" style={{width: prototype[item].fieldWidth ? 'calc(' + prototype[item].fieldWidth.toString() + '% - 10px)' : "calc(10% -10px)"}} size='lg'>
                        <Form.Label htmlFor="textInput">{prototype[item].label}</Form.Label>
                        <div className="FormInput" >
                            <Form.Control
                                className="inputClass"
                                type={prototype[item].fieldIsNumber ? 'number' :'text'}
                                value={this.state.value}
                                id="textInput"
                                disabled={prototype[item].fieldFormDisable}
                                onChange={this.handleChange}
                            />
                        </div>
                    </Form.Group>
                })}
            </Form>
        }
    }
}
export default FormFields