import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //calls the underlying constructor method

    this.state = {
      name: 'Yihua',
      company: 'ZTM', //something react is looking for inside of your component
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name} and I work at {this.state.company} </p>
          <button
            onClick={() => {
              this.setState({ name: 'Andrei' });
              console.log(this.state.name)
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
