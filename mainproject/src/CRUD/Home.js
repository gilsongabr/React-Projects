import FormFields from "../MainProject/FormFields/FormFields";

export default class Home extends FormFields{

    render() {
        /*
        this.field
            .addName('Nome')
            .addNumber(90)
         */
        this.field('nome', 'NAME')
        this.field('id', 'NAME')
        // console.log('this.record ~> ', this)
        return super.render({ a: 'TESTE ', b: ' HERANÇA ', c:' DE REACT!'})
    }
}