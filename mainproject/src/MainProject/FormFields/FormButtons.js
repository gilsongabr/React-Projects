export function FormButtons(props) {
    return <div>
        <button onClick={props.onClick}> {props.buttonName}</button>
    </div>
}

export default FormButtons