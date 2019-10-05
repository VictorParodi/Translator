import React from 'react';
import UserCreate from './UserCreate.js';

class App extends React.Component {
    state = {language: 'english'};

    onChangeLanguage = (lang) => {
        this.setState({language: lang});
    }

    render() {
        return (
            <div className="ui container">
                <h1>Select a language: </h1>
                <i className="flag us" onClick={() => this.onChangeLanguage('english')}></i>
                <i className="flag nl" onClick={() => this.onChangeLanguage('dutch')}></i>
                <UserCreate />
            </div>
        );
    }
}

export default App;