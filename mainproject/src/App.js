import FormFields from './MainProject/FormFields/FormFields'
import FormButtons from './MainProject/FormFields/FormButtons'
import { useState } from 'react'
import Header from "./MainProject/Header/Header";

function App() {
    let [numero, setNumero] = useState(100)

    const handleButtonClick = () => {
        setNumero(numero += 1)
    }

    return <div>
        <Header/>
        <FormFields
            fieldId={'nome'}
            fieldName={'Nome'}
            />
        <FormButtons
            buttonName={'Clique'}
            onClick={handleButtonClick}
        />
        <FormFields
            fieldId={'numero'}
            fieldName={numero}
        />
    </div>
}

export default App