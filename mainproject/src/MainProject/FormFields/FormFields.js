import './FormFields.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap"
import React from 'react'


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
                fieldType: 'text',
                fieldIsSelect: false,
                fieldSelectOptions: [],
                value: undefined
            }
            this.form = field
            this.record.push(this.form)
            return this
        }
        this.fieldWidth = (width) => {
            this.form.fieldWidth = width
            return this
        }
        this.fieldDisable = (disable?: true | false | undefined) => {
            if (disable === false) {
                this.form.fieldFormDisable = false
                return this
            }
            this.form.fieldFormDisable = true
            return this
        }
        this.fieldIsNumber = (isNumber?: true | false | undefined) => {
            if (isNumber === false)
                return this
            this.form.fieldType = 'number'
            return this
        }
        this.fieldIsDate = (isDate?: true | false | undefined) => {
            if (isDate === false)
                return this
            this.form.fieldType = 'date'
            return this
        }
        this.fieldIsSelect = (options?: []) => {
            this.form.fieldIsSelect = true
            this.form.fieldSelectOptions = options
            return this
        }
    }

    handleChange(e) {
        const indexRecord = Object.keys(this.record).findIndex((item) => { return this.record[item].nome === e.target.id })
        this.record[indexRecord].value = e.target.value
        this.setState({ value: e.target.value })
    }
    render(prototype) {
        if (prototype) {
            return <div><Form className="Form">
                { Object.keys(prototype).map((item, key) => {
                    const isSelect = prototype[item].fieldIsSelect
                    return <Form.Group key={key} className="FormField" style={{width: prototype[item].fieldWidth ? 'calc(' + prototype[item].fieldWidth.toString() + '% - 10px)' : "calc(10% -10px)"}} size='lg'>
                        <Form.Label htmlFor="textInput">{prototype[item].label}</Form.Label>
                        <div className="FormInput mb-3" >
                            {isSelect
                                ? <Form.Select aria-label="Default select example">
                                    { Object.keys(prototype[item].fieldSelectOptions).map((option, key) => {
                                        return <option key={key} value={prototype[item].fieldSelectOptions[option].value}>{prototype[item].fieldSelectOptions[option].label}</option>
                                    })}
                                    </Form.Select>
                                : <Form.Control
                                    className="text-uppercase form-control"
                                    type={prototype[item].fieldType}
                                    // value={this.state.value}
                                    id={prototype[item].nome}
                                    disabled={prototype[item].fieldFormDisable}
                                    onChange={this.handleChange}
                                />
                            }
                        </div>
                    </Form.Group>
                })}
            </Form>
                <div className="inputButton">
                    <Button variant="outline-primary">INCLUIR</Button>
                    <Button variant="outline-secondary" className="closeButton">SAIR</Button>
                </div>
            </div>
        }
    }
}
export default FormFields