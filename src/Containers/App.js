import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Persons from '../components/Persons/Persons';
import Radium, { StyleRoot } from 'radium';

class App extends Component {

  state = {
    persons: [
      {id: 'abc1', name: 'Rohan', company: 'Cognam'},
      {id: 'abc2', name: 'Rishav', company: 'Voicezen'},
      {id: 'abc3', name: 'Surbhi', company: 'Deloitte'}
    ],
    showPersons: false
  };

  deletePersonHandler = (pIndex) => {
    const persons = [...this.state.persons]
    persons.splice(pIndex, 1);
    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    let person = null;
    if(this.state.showPersons) {
      person = (
        <div>
          <Persons onClick={this.deletePersonHandler} persons={this.state.persons} />
        </div>
      );
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    let classes = [];
    if(this.state.persons.length <= 2)
      classes.push('red');
    if(this.state.persons.length <= 1)
      classes.push('bold');

      //StyleRoot component is part of radium package to user media queries through inline CSS
    return(
      <StyleRoot>
      <div className="App">
      <header className="App-header">
        <h1>React Application</h1>
        <p className={classes.join(' ')}>This is my practice on javascript</p>
        <button style={style} onClick={this.togglePersonHandler}>{this.state.showPersons ? 'Hide' : 'Show'}</button>
        {person}
      </header>
    </div>
    </StyleRoot>
    );
    // return (
    //   React.createElement('h1', {className: 'App'}, 'Hello! This is a React App')
    // )
  }
}

export default Radium(App);
