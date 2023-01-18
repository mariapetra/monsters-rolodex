import { Component } from 'react'
import './App.css';

//This App component represents the entire application
class App extends Component {
  constructor() {
    super(); //calls the underlying constructor method

    this.state = {
      monsters: [
        {
          name: 'Maria'
        },
        {
          name: 'Laura'
        },

        {
          name: 'Louise'
        },
      ]

    };
  }

  render() {
    return <div className="App">
      {
        //use map to iterate through the monsters
        //what is map? map is an array method 
        //use a function to itterate through your array and create a new array based on your existing arrays
        this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>;
        }
        )
      }


    </div>
  }
};
export default App;
