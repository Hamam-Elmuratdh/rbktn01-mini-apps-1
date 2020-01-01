class App extends React.Component {
    render() {
        return React.createElement('div', { className: 'check' });
    }
}

class MainForm extends React.Component {
    constructor(props) {
        this.state = {
            step: 1,
            name: '',
            email: '',
            password: '',
            line1Address: '',
            line2Address: '',
            city: '',
            state: '',
            phoneNumber: '',
            creditCardNumber: '',
            expirationDate: '',
            CVV: '',
            zip: ''
        };
    }

    render() {
        return React.createElement(
            'h1',
            null,
            'Hello '
        );
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));