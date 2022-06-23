import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';



const Headers = (props) => {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    function alterar_url() {
        window.location = '/telaCalendario'
    }
    function home() {
        window.location = '/principal'
    }
    function matricula() {
        window.location = '/matricula'
    }
    function extras() {
        window.location = '/extras'
    }
    return (


        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand onClick={home}>CEP Deyvid Pinto</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink onClick={home}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={alterar_url}>Aulas</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Chats</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Mais
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={alterar_url}>
                                    Agenda de Provas
                                </DropdownItem>
                                <DropdownItem onClick={extras}>
                                    Atividades Extras
                                </DropdownItem>
                                <DropdownItem onClick={matricula}>
                                    Matrícula
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Configurações
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Deyvid Pinto</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}


export default Headers;