import FormFields from './MainProject/FormFields/FormFields'
import FormButtons from './MainProject/FormFields/FormButtons'
import { useState } from 'react'
import Header from "./MainProject/Header/Header";
import './App.css'
import { fieldTypeIsNumber, fieldDisabled } from './MainProject/helper'

function App() {
    let [numero, setNumero] = useState(100)

    const handleButtonClick = () => {
        setNumero(numero += 1)
    }

    return <div>
        <Header/>
        <div className="bodyClass overflow-auto">
            <FormFields
                fieldId={'id'}
                fieldName={'Id'}
                // fieldType={fieldTypeIsNumber()
            />
            <FormFields
                fieldId={'nome'}
                fieldName={'Nome'}
                fieldWidth={80}
            />
            <FormFields
                fieldId={'nome'}
                fieldName={'Nome'}
                fieldWidth={5}
            />
            <FormFields
                fieldId={'nome'}
                fieldName={'Nome'}
                fieldWidth={80}
            />
            <FormFields
                fieldId={'nome'}
                fieldName={'Nome'}
                fieldWidth={80}
            />
        </div>
        <FormButtons
            buttonName={'Clique'}
            onClick={handleButtonClick}
        />
    </div>
}

export default App