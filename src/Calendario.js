import React from 'react';
import { Button } from 'reactstrap'
import { Table } from 'reactstrap';

class Calendario extends React.Component {

    render() {
        return (
            <Table bordered>
                <thead>
                    <tr>
                        <th>Horário</th>
                        <th>Segunda-Feira</th>
                        <th>Terça-Feira</th>
                        <th>Quarta-Feira</th>
                        <th>Quinta-Feira</th>
                        <th>Sexta-Feira</th>
                        <th>Adicionar Lembrete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">13:30</th>
                        <td>Matematica</td>
                        <td>Matematica</td>
                        <td>Matematica</td>
                        <td>Português</td>
                        <td>Português</td>
                        <td><Button color="success">Adicionar</Button>{' '}</td>

                    </tr>
                    <tr>
                        <th scope="row">14:20</th>
                        <td>Português</td>
                        <td>Português</td>
                        <td>Português</td>
                        <td>Matematica</td>
                        <td>Matematica</td>
                        <td><Button color="success">Adicionar</Button>{' '}</td>
                    </tr>
                    <tr>
                        <th scope="row">15:10</th>
                        <td>Matematica</td>
                        <td>Matematica</td>
                        <td>Matematica</td>
                        <td>Português</td>
                        <td>Português</td>
                        <td><Button color="success">Adicionar</Button>{' '}</td>
                    </tr>
                    <tr>
                        <th scope="row">16:00</th>
                        <td>Intervalo</td>
                        <td>Intervalo</td>
                        <td>Intervalo</td>
                        <td>Intervalo</td>
                        <td>Intervalo</td>
                        <td>Intervalo</td>
                    </tr>
                    <tr>
                        <th scope="row">16:20</th>
                        <td>Português</td>
                        <td>Português</td>
                        <td>Português</td>
                        <td>Matematica</td>
                        <td>Matematica</td>
                        <td><Button color="success">Adicionar</Button>{' '}</td>
                    </tr>
                    <tr>
                        <th scope="row">17:10</th>
                        <td>Matematica</td>
                        <td>Matematica</td>
                        <td>Matematica</td>
                        <td>Português</td>
                        <td>Português</td>
                        <td><Button color="success">Adicionar</Button>{' '}</td>
                    </tr>
                    <tr>
                        <th scope="row">18:00</th>
                        <td>Fim da aula</td>
                        <td>Fim da aula</td>
                        <td>Fim da aula</td>
                        <td>Fim da aula</td>
                        <td>Fim da aula</td>
                        <td>Fim da aula</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}
export default Calendario