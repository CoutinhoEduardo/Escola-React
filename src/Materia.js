import React from 'react';
import './Materia.css'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import Modal from './Modal'

const Materia = (props) => {

    return (
        <div >
            <Row className='materiaCard'>
                <Col sm="6">
                    <Card body>
                        <CardTitle>Avisos dos Professores!</CardTitle>
                        <CardText>Aqui encontra-se avisos dos professores! Clique para acessas os avisos</CardText>
                        <Modal />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Materia;