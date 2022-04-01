import React, { useState } from 'react';
import { Card, CardBody, Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import SurveyComponent from './components/survey';
import defaultSurveyConfig from './config/survey';
//import * as Survey from 'survey-react'

export interface IApplicationProps { }



const Application: React.FunctionComponent<IApplicationProps> = props => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);


    return (
        <>
            <Navbar color="primary" dark expand="md">
                <Container>
                    <NavbarBrand>Covid Pre Screening Platform</NavbarBrand>
                    <NavbarToggler onClick={() => setNavbarOpen(!navbarOpen)}></NavbarToggler>
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
                            css={defaultSurveyConfig.defaultSurveyCSS}
                            json={defaultSurveyConfig.defaultSurveyJSON}
                            data={defaultSurveyConfig.defaultSurveyDATA}
                            onValueChanged={async (survey: any) => {
                                
                                if (survey.data["tempCheck"]) {
                                    //console.log("CHANGE DETECTED YO")
                                    //const response = await fetch("http://localhost:5000/getTemp")

                                    // Basic GET Request to Flask Backend to grab the temperature value from the sensor
                                    // Asynchronous so waits until Python finishes its execution
                                    await fetch("http://localhost:5000/getTemp")
                                        .then((response) => response.json())
                                        .then((responseJson) => {
                                            //console.log(responseJson['temp']);
                                            survey.setValue("question6", responseJson["temp"]);
                                            survey.setValue("tempCheck", false);
                                        })
                                        // General Error Catching
                                        .catch((error) => {
                                            console.error(error);

                                        })
                                }
                                else if (survey.data["oxyCheck"]) {
                                    //console.log("CHANGE DETECTED YO")
                                    //const response = await fetch("http://localhost:5000/getTemp")

                                    // Basic GET Request to Flask Backend to grab the Oxygen value from the SpO2 sensor
                                    // Asynchronous so waits until Python finishes its execution
                                    await fetch("http://localhost:5000/getOxy")
                                        .then((response) => response.json())
                                        .then((responseJson) => {
                                            //console.log(responseJson['oxy']);
                                            survey.setValue("question7", responseJson["oxy"]);
                                            survey.setValue("oxyCheck", false);
                                        })
                                        // General Error Catching
                                        .catch((error) => {
                                            console.error(error);

                                        })
                                }
                                else if (survey.data["checkQR"]) {

                                   
                                    // Basic GET Request to Flask Backend to grab the QR value after validation in Python Backend
                                    // Asynchronous so waits until Python finishes its execution
                                    await fetch("http://localhost:5000/getQR")
                                        .then((response) => response.json())
                                        .then((responseJson) => {
                                        
                                            survey.setValue("question8", responseJson["validQR"]);
                                            survey.setValue("checkQR", false);
                                        })
                                        // General Error Catching
                                        .catch((error) => {
                                            console.error(error);

                                        })
                                }
                                else if (survey.data["checkID"]) {


                                    // Basic GET Request to Flask Backend to grab the QR value after validation in Python Backend
                                    // Asynchronous so waits until Python finishes its execution
                                    await fetch("http://localhost:5000/getID")
                                        .then((response) => response.json())
                                        .then((responseJson) => {

                                            survey.setValue("question9", responseJson["validID"]);
                                            survey.setValue("checkID", false);
                                        })
                                        // General Error Catching
                                        .catch((error) => {
                                            console.error(error);

                                        })
                                }

                            }}
                            // onComplete occurs when survey finshes all subrountines as expected
                            // With answers to various sections matching expected 
                            onComplete={async (survey: any) => {
                                
                                // Prepopulate expected array
                                const payload = {
                                    questionArray: [] as string[],
                                    temperature: "",
                                    oxygen: "",
                                    VaccineVerification: "",
                                    IDVerification: "",
                                    timeStamp: ''
                                }
                                // Checking if the last question (FaceID Check) passed optimally
                                if (survey.data["question9"] === 'Pass') {
                                    // 
                                    var getTime = Date.now();
                                    var date = new Date(getTime)
                                    payload["timeStamp"] = (date.getDate() +
                                        "/" + (date.getMonth() + 1) +
                                        "/" + date.getFullYear() +
                                        "  , " + date.getHours() +
                                        ":" + date.getMinutes() +
                                        ":" + date.getSeconds());
                                    payload["temperature"] = survey.data['question6']
                                    payload["oxygen"] = survey.data['question7']
                                    payload["VaccineVerification"] = survey.data['question8']
                                    payload["IDVerification"] = survey.data['question9']
                                    for (let i = 1; i < 6; i++) {
                                        let q = survey.data["question" + String(i)]
                                        payload.questionArray.push(q)
                                    }
                                    console.log(payload);
                                    const response = await fetch("http://localhost:5000/add", {
                                        method: "POST",
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(payload)
                                    })
                                    if (response.ok) {
                                        console.log("it worked")
                                       
                                    }
                                    else {
                                        console.log("FAIL");
                                    }
                                }
                                   
                                /*
                                    Here we can calls to Flask Endpoint to send JSON
                                
                                */
                                window.location.reload();  
                    
                            }}


                        />
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}


export default Application;