import React from "react"
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'

class TableFields extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Table
                    striped
                    bordered
                    hover>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>CPF</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Gilson</td>
                        <td>05417997110</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TableFields