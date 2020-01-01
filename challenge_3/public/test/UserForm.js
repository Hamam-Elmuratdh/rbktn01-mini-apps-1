
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 1,
            name: '',
            email: '',
            password: ''
        };
    }
    // go to next step 
    nextStep() {
        console.log('clicked');
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // handle change 
    handleChange(e, input) {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { name, email, city } = this.state;
        const values = { name, email, city };
        switch (step) {
            case 1:
                console.log('aaaaa');
                return React.createElement(
                    'div',
                    null,
                    React.createElement(FormUserDetails, {

                        handleChange: this.handleChange,
                        values: values
                    }),
                    React.createElement(
                        'button',
                        { onClick: this.nextStep.bind(this) },
                        ' Next '
                    )
                );
            case 2:
                return React.createElement(FormPersonalDetails, {
                    nextStep: this.nextStep.bind(this),
                    handleChange: this.handleChange,
                    values: values
                });
            case 3:
                return React.createElement(
                    'div',
                    null,
                    React.createElement(Confirm, {
                        nextStep: this.nextStep.bind(this),
                        handleChange: this.handleChange,
                        values: values
                    })
                );
            case 4:
                return React.createElement('h1', { sucess: true });

            default:
                return React.createElement('div', null);
        }
    }

}

class FormUserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password: '' };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                React.createElement(
                    'label',
                    null,
                    'Name:',
                    React.createElement('input', { type: 'text', name: this.state.name, onChange: this.handleChange })
                ),
                React.createElement(
                    'label',
                    null,
                    'Email:',
                    React.createElement('input', { type: 'text', name: this.state.email, onChange: this.handleChange })
                ),
                React.createElement(
                    'label',
                    null,
                    'Password:',
                    React.createElement('input', { type: 'text', name: this.state.password, onChange: this.handleChange })
                ),
                React.createElement('input', { type: 'submit', name: 'Submit' })
            ),
            React.createElement(
                'button',
                { onClick: this.props.nextStep },
                'form one'
            )
        );
    }
}
class FormPersonalDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Address: '', City: '', state: '' };

        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeAddress(event) {
        this.setState({ Address: event.target.value });
    }
    handleChangeCity(event) {
        this.setState({ City: event.target.value });
    }
    handleChangeState(event) {
        this.setState({ state: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                React.createElement(
                    'label',
                    null,
                    'Address:',
                    React.createElement('input', { type: 'text', name: this.state.address, onChange: this.handleChange })
                ),
                React.createElement(
                    'label',
                    null,
                    'City:',
                    React.createElement('input', { type: 'text', name: this.state.city, onChange: this.handleChange })
                ),
                React.createElement(
                    'label',
                    null,
                    'State:',
                    React.createElement('input', { type: 'text', name: this.state.state, onChange: this.handleChange })
                ),
                React.createElement('input', { type: 'submit', name: 'Submit' })
            ),
            React.createElement(
                'button',
                { onClick: this.props.nextStep },
                'Next'
            )
        );
    }
}
class FormBillingInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { CreditCardNumnber: '', CreditCardExpiary: '', CVV: '' };

        this.handleChangeCreditCardNumber = this.handleChangeCreditCardNumber.bind(this);
        this.handleChangeCreditCardExpiary = this.handleChangeCreditCardExpiary.bind(this);
        this.handleChangeCVV = this.handleChangeCVV.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeCreditCardNumber(event) {
        this.setState({ CreditCardNumber: event.target.value });
    }
    handleChangeCreditCardExpiary(event) {
        this.setState({ CreditCardExpiary: event.target.value });
    }
    handleChangeCVV(event) {
        this.setState({ CVV: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'form',
                { onSubmit: this.handleSubmit },
                React.createElement(
                    'label',
                    null,
                    'Address:',
                    React.createElement('input', { type: 'text', name: this.state.CreditCardNumnber, onChange: this.handleChange })
                ),
                React.createElement(
                    'label',
                    null,
                    'City:',
                    React.createElement('input', { type: 'text', name: this.state.CreditCardExpiary, onChange: this.handleChange })
                ),
                React.createElement(
                    'label',
                    null,
                    'State:',
                    React.createElement('input', { type: 'text', name: this.state.CVV, onChange: this.handleChange })
                ),
                React.createElement('input', { type: 'submit', name: 'Submit' })
            ),
            React.createElement(
                'button',
                { onClick: this.props.nextStep },
                'Confirm'
            )
        );
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));