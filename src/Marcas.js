import React from 'react';
import Avisos from './img/Avisos.png'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

const Marcas = (props) => {
    return (
        <div>
            <Card>
                <img width="100%" src={Avisos} alt="Card image cap" />
                <CardBody>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <CardLink href="#">Visite o Aviso!</CardLink>
                    <CardLink href="#">Veja mais dos Avisos!</CardLink>
                </CardBody>
            </Card>
        </div>
    );
};

export default Marcas;