import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './component/Person';

class App extends Component {
    state={
        person:[
            {name:'Max', age:32},
            {name:'sumon', age:42},
            {name:'Rishad', age:82}

        ],
        otherobj:"something Value"

    }

    eventHandelar = (props) => {
        this.setState({
            person:[
                {name:'Md Hazrot Ali Shaikh', age:32},
                {name:'sumon Shaikh', age:42},
                {name:'Rishad Khan', age:82}

            ],
            other:this.state.otherobj,
        })
    }
  render() {



     return(
      <div className="App">
          <Person name={this.state.person[0].name} age={this.state.person[0].age} />
          <Person name={this.state.person[1].name} age={this.state.person[1].age} />
          <Person name={this.state.person[2].name} age={this.state.person[2].age} />
          <button onClick={this.eventHandelar}>click me</button>

          <Person> My Hobby Racing</Person>

      </div>
     )
  } 
}

export default App;
