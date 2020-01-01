class App extends React.Component {
  render() {
      return (
          <div className="check">
            

          </div>
      );
  }
}

class MainForm extends React.Component {
  constructor(props){
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
      zip:''
  };}
  
  render() {
      return (
          <h1>Hello </h1>
      );
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
