import React from "react";
import FormFields from "../MainProject/FormFields/FormFields";

export default class Home extends FormFields{
    render() {
        return super.render({ a: 'TESTE ', b: ' HERANÇA ', c:' DE REACT!'})
    }
}