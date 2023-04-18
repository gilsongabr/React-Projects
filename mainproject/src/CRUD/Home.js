import FormFields from "../MainProject/FormFields/FormFields";

export default class Home extends FormFields{
    constructor(props) {
        super(props)
        this.field('nome', 'Nome')
            .fieldFormWidth(50)

        this.field('teste', 'Aleluia')
            .fieldFormWidth(50)
            .fieldFormDisable(false)
            .fieldIsNumber()
    }

    render() {
        return super.render(this.record)
    }
}