import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{ 

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] render function running');
        return (
            this.props.persons.map((p, i) => 
            <Person 
            key={p.id}
            name={p.name}
            company={p.company}
            onClick={() => this.props.onClick(i)}
            />)
        );
    }
}

// const Persons = (props) => props.persons.map((p, i) => <Person 
// key={p.id} 
// name={p.name} 
// company={p.company} 
// onClick={() => props.onClick(i)} 

// />);

export default Persons;