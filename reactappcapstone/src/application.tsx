import React, { useState } from 'react';
import { Card, CardBody, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import SurveyComponent from './components/survey';
import defaultSurveyConfig from './config/survey';


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
               <Card className='mt-1'>
                   <CardBody>
                        <SurveyComponent
                            css = {defaultSurveyConfig.defaultSurveyCSS}
                            json = {defaultSurveyConfig.defaultSurveyJSON}
                            data = {defaultSurveyConfig.defaultSurveyDATA}
                            onComplete = {(survey:any)=>{
                                console.log(survey.data);

                                /*
                                    Here we can calls to Flask Endpoint to send JSON
                                
                                */
                            }}
                        />
                   </CardBody>
               </Card>
            </Container>
        </>
    )
}


export default Application;