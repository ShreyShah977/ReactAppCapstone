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
                                const payload = {
                                        questionArray:[] as string[],
                                        temperature:"",
                                        oxygen:"",
                                        VaccineVerification:"",
                                        IDVerification:"" 
                                }
                                payload["temperature"] = survey.data['question6']
                                payload["oxygen"] = survey.data['question7']
                                payload["VaccineVerification"] = survey.data['question8']
                                payload["IDVerification"] = survey.data['question9']
                                for(let i = 1; i < 6; i++){
                                    let q = survey.data["question"+String(i)]
                                    payload.questionArray.push(q)
                                }
                                console.log(payload);
                                
                                /*
                                    Here we can calls to Flask Endpoint to send JSON
                                
                                */

                                
                                //window.location.reload();                               
                            }}
                            
                        />
                   </CardBody>
               </Card>
            </Container>
        </>
    )
}


export default Application;