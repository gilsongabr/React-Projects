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

        this.field('data', 'Data de Nascimento')
            .fieldWidth(40)
            .fieldIsDate()

        const sexoOptions = [{'value': 1, 'label': 'Masculino'}, {'value': 2, 'label': 'Feminino'}, {'value': 3, 'label': 'Ambos'}]

        this.field('sexo', 'Sexo')
            .fieldIsSelect(sexoOptions)
    }

    render() {
        return super.render(this.record)
    }
}