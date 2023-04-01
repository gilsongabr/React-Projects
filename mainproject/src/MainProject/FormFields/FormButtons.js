import './FormButton.css'
export function FormButtons(props) {
    return <div className="buttomClass">
        <button onClick={props.onClick}> {props.buttonName}</button>
    </div>
}

export default FormButtons