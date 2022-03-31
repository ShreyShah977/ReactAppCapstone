const defaultSurveyJSON = {
    "title": "COVID-19 Pre Screening ",
    "description": "Please answer honestly.",
    "logoPosition": "right",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "boolean",
                    "name": "question1",
                    "title": "Have you travelled outside of Canada in the last 14 Days?",
                    "isRequired": true
                },
                {
                    "type": "boolean",
                    "name": "question2",
                    "visibleIf": "{question1} = false",
                    "title": "Have you or anyone in your household been tested positive for COVID-19 or are currently waiting for a COVID-19 test result?",
                    "isRequired": true
                },
                {
                    "type": "boolean",
                    "name": "question3",
                    "visibleIf": "{question2} = false",
                    "title": "Have you or anyone in your household had any of the following symptoms in the last 21 days: sore throat, cough, chills, body aches for unknown reasons, shortness of breath for unknown reasons, loss of smell, or loss of taste?",
                    "isRequired": true
                },
                {
                    "type": "boolean",
                    "name": "question4",
                    "visibleIf": "{question3} = false",
                    "title": "To the best of your knowledge have you been in close proximity to any individual who tested positive for COVID-19?",
                    "isRequired": true
                },
                {
                    "type": "boolean",
                    "name": "question5",
                    "visibleIf": "{question4} = false",
                    "title": "Have you received the full mRNA immunizaion (with or without the booster) dose within the last 14 days, or not at all?",
                    "isRequired": true
                }
            ],
            "title": "Questionnaire"
        },
        {
            "name": "page1",
            "elements": [
                {
                    "type": "boolean",
                    "name": "tempCheck",
                    "visibleIf": "{question5} = false",
                    "title": "Please slide toggle to \"Get Data\"  for Temperature Check. Then slide to DONE to move to the next question.",
                    "labelTrue": "GetData",
                    "labelFalse": "Done"
                },
                {
                    "type": "text",
                    "name": "question6",
                    "visibleIf": "{question5} = false",
                    "title": "Please record your temperature at the device below.",
                    "description": "See graphic for more information.",
                    "isRequired": true,
                    "readOnly": true
                },
                {
                    "type": "boolean",
                    "name": "oxyCheck",
                    "visibleIf": "{question6} notempty",
                    "title": "Please slide toggle to \"Get Data\"  for Oxygen (SpO2) Check. Then slide to DONE to move to the next question.",
                    "labelTrue": "GetData",
                    "labelFalse": "Done"
                },
                {
                    "type": "text",
                    "name": "question7",
                    "visibleIf": "{question6} notempty",
                    "title": "Please record your oxygen level at the device below",
                    "description": "See graphic for more information.",
                    "isRequired": true,
                    "readOnly": true
                }
            ],
            "visibleIf": "{question5} = false"
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "boolean",
                    "name": "checkQR",
                    "visibleIf": "{question7} >= 90",
                    "title": "Please slide toggle to \"Get QR\"  for QR Code Verification. Then slide to DONE to move to the next question.",
                    "labelTrue": "GetQR",
                    "labelFalse": "Done"
                },
                {
                    "type": "text",
                    "name": "question8",
                    "visibleIf": "{question7} >= 90",
                    "title": "Please present your vaccine passport or QR Code for verification as shown below",
                    "isRequired": true,
                    "readOnly": true
                },
                {
                    "type": "boolean",
                    "name": "checkID",
                    "visibleIf": "{question8} contains 'Pass'",
                    "title": "Please slide toggle to \"Get QR\"  for ID OCR Verification. Then slide to DONE to move to the next question.",
                    "labelTrue": "GetID",
                    "labelFalse": "Done"
                },
                {
                    "type": "text",
                    "name": "question9",
                    "visibleIf": "{question8} contains 'Pass'",
                    "title": "Please present your ID for final verification",
                    "isRequired": true,
                    "readOnly": true
                }
            ]
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "html",
                    "name": "question10",
                    "visibleIf": "{question1} = true or {question2} = true or {question3} = true or {question4} = true or {question5} = true or {question6} >= 38 or {question7} <= 90 or {question8} = 'Fail' or {question9} = 'Fail'",
                    "html": "<!DOCTYPE html>\n<html>\n<body>\n\n<h1>We're sorry</h1>\n<h2>Your prescreening doesn't meeting the requirements set by this establishment.</h2>\n\n<p>Kindly come back in 1-2 weeks</p>\n\n\n\n<script>\nfunction myFunction() {\n  alert(\"Hello! I am an alert box!\");\n}\n</script>\n\n</body>\n</html>"
                }
            ]
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "html",
                    "name": "question11",
                    "visibleIf": "{question9} = 'Pass'",
                    "html": "<!DOCTYPE html>\n<html>\n<body>\n\n<h1>Thank you for completing this Survey!</h1>\n<h2>Your prescreening matches the requirements set by this establishment.</h2>\n\n\n\n\n\n<script>\nfunction myFunction() {\n  alert(\"Hello! I am an alert box!\");\n}\n</script>\n\n</body>\n</html>"
                }
            ]
        }
    ]
};
const defaultSurveyCSS = {
    header: 'bg-primary text-white p-3',
    body: 'bg-light',
    completedPage: 'p-3'
};
const defaultSurveyDATA = {};


const defaultSurveyConfig = {

    defaultSurveyCSS,
    defaultSurveyJSON,
    defaultSurveyDATA

};

export default defaultSurveyConfig;