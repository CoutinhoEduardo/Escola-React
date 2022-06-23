import React from 'react';
import Headers from './Headers';
import Progresso from './Progresso';
import { ListGroup, ListGroupItem } from 'reactstrap';

class AtividadesExtra extends React.Component {
    render() {
        return (
            <div>
                <Headers />
                <ListGroup className='formAtividade'>
                    <ListGroupItem active tag="a" href="#" action>Suas atividades extras</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Reforço Português</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Reforço Matematica</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Canto</ListGroupItem>
                    <ListGroupItem tag="a" href="#" action>Futsal</ListGroupItem>
                    <div className='extras'>
                        <Progresso />
                    </div>
                </ListGroup>


            </div>
        );
    }
}
export default AtividadesExtra