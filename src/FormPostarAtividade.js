import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class FormPostarAtividade extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Texto</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="exampleText" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>Escolher Arquivo</Label>
                    <Col sm={10}>
                        <Input type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                            Escolha o arquivo que deseja postar para os alunos
                        </FormText>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button color='primary'>Postar</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }

}
export default FormPostarAtividade