import FormFields from './MainProject/FormFields/FormFields'
import FormButtons from './MainProject/FormFields/FormButtons'
import { useState } from 'react'

function App() {
    let [numero, setNumero] = useState(100)

    const handleButtonClick = () => {
        setNumero(numero += 1)
    }

    return <div>
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