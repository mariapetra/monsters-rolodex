import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); //calls the underlying constructor method

    this.state = {
      name: 'Yihua', //something react is looking for inside of your component
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
        </header>
      </div>
    );
  }

}

export default App;
