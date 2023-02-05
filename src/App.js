import { Component } from 'react'
import './App.css';

//This App component represents the entire application
class App extends Component {
  constructor() {
    super(); //calls the underlying constructor method

    this.state = {
      monsters: [],
    };
  }

  //life cycle methods - re render component after getting the information
  //get this info the moment it is rendered by react 
  //componentDidMount component DidUpdate = most important - method you write code inside

  //mount = first time it gets onto the dom / this only happens once

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      //promise something that is asynchoromous in JS - i promise eventually i will have a value
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users };
      },
        () => {
          console.log(this.state)
        }
      )
      );
  }
  //Class is a protected keyword so we have to use className
  render() {
    return <div className="App">
      <input
        className='search-box'
        type='search'
        placeholder='search monsters'
        onChange={(event) => {
          const searchString = event.target.value.toLocaleLowerCase();
          const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchString);
          });
          this.setState(() => {
            return { monsters: filteredMonsters };
          })
        }}
      //immutability - if you are going to modify an array - create a new array with that method - .map .filter .reduce
      />
      {
        // The things that look like HTML are components that JSX has written in
        // Allowing us to bind functionality to the UI
        //use map to iterate through the monsters
        //what is map? map is an array method 
        //use a function to itterate through your array and create a new array based on your existing arrays
        this.state.monsters.map((monster) => {
          //most projects will have an id value - as this is unique / you will get an error that you should provide a unique key
          //this is what we are using in our key value
          //why - react and re rendering - the key value is used by react to make it more optimised to update and re render components on your page
          //eg we have 4 h1s - react updates this directky
          //how are these h1s differentiate? - by using  the key value
          // react will use this to know who to update
          return <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        }
        )
      }


    </div>
  }
};
export default App;
