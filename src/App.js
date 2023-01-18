import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //calls the underlying constructor method

    this.state = {
      firstName: 'Yihua',
      lastName: 'Someone',
      company: 'ZTM', //something react is looking for inside of your component
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi I am {this.state.firstName} {this.state.lastName} and I work at {this.state.company} </p>
          <button
            onClick={() => {
              this.setState({
                firstName: 'Maria',
                lastName: 'Claydon',
                company: 'BHP',
              });
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }

}

export default App;
