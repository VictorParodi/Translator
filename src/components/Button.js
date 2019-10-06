import React from 'react';
import LanguageContext from './../contexts/LanguageContext.js';

class Button extends React.Component {
    static contextType = LanguageContext;

    render() {
        console.log('BUTTON CONTEXT --->', this.context);
        return (
            <button className="ui primary button">Submit</button>
        );
    }
}

export default Button;