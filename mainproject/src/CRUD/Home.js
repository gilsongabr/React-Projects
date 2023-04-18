import FormFields from "../MainProject/FormFields/FormFields";

export default class Home extends FormFields{
    constructor(props) {
        super(props)
        this.field('nome', 'Nome')
            .fieldWidth(50)

        this.field('teste', 'Aleluia')
            .fieldWidth(50)
            .fieldDisable(false)
            .fieldIsNumber()
    }

    render() {
        return super.render(this.record)
    }
}