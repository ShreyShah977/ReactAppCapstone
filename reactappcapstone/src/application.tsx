import React, { useState } from 'react';
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';


export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = props  => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

    return (
        <>
            <Navbar color="primary" dark expand="md">
                <Container>
                    <NavbarBrand>Covid Pre Screening Platform</NavbarBrand>
                    <NavbarToggler onClick={()=>setNavbarOpen(!navbarOpen)}></NavbarToggler>
                    <Collapse isOpen={navbarOpen} navbar>
                        <Nav className="me-auto" navbar>
                        
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            <Container>
                Paste Survey Here!
            </Container>
        </>
    )
}


export default Application;