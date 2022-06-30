import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import avisos from './dados.json'

class Modals extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }









    render() {


        return (

            <div>
                <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}Aviso!</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Avisos</ModalHeader>
                    <ModalBody>
                        {avisos.aviso} {avisos.avisoConteudo} {avisos.conteudo}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Okay</Button>{' '}

                    </ModalFooter>
                </Modal>
            </div>
        );

    }
}

export default Modals;