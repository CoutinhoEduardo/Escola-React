import React from 'react';
import Headers from './Headers';
import './Global.css'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { Input } from 'reactstrap';

class Matricula extends React.Component {
    render() {
        return (
            <div>

                <Headers />

                <Row className='formAtividade'>
                    <Col sm="6">
                        <Card body>
                            <CardTitle>Faça matricula</CardTitle>
                            <CardText>
                                <Input type="select">
                                    <option>Selecione uma opção</option>
                                    <option>Matematica Reforço</option>
                                    <option>Canto</option>
                                    <option>Sapecar</option>
                                </Input>
                                <Input placeholder="Digite seu CPF" />
                            </CardText>
                            <Button>Fazer matricula</Button>
                        </Card>
                    </Col>
                </Row>




            </div>
        )
    }
}
export default Matricula