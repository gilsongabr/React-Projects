import FormFields from "../MainProject/FormFields/FormFields";

export default class Home extends FormFields{
    constructor(props) {
        super(props)
        this.field('nome', 'Nome')
        this.field('teste', 'Aleluia')
    }

    render() {
        return super.render(this.record)
    }
}