import React from 'react';
import * as Survey from 'survey-react'

export interface ISurveyProps {
    css:any;
    json:any;
    data:any;
    onComplete: (survey: any) => void;
}

const SurveyComponent: React.FunctionComponent<ISurveyProps> = props => {
    const {css, data, json, onComplete} =  props;



    return (
        <Survey.Survey
            css={css}
            data={data}
            json={json}
            onComplete={onComplete}
        
        
        />
    );
}

export default SurveyComponent;