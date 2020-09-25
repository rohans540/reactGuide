import React, {Component, Fragment} from 'react';
import './person.css';
import Radium from 'radium';
import Aux from '../../../HOC/auxilliary';

class Person extends Component {

    render() {
        const style = {
            backgroundColor: 'white',
            border: '1px solid yellow',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'salmon',
                color: 'white'
            }
        }
        const newStyle = {          //This is how to add media queries in a component from inline CSS using radium
            '@media (min-width: 500px)': {
                width: '450px'
            }
        }
        return(
        // <Aux> 
        // React.Fragment does the exactly same thing and works exactly same as the Aux HOC we created and user
        <Fragment> 
            <div className="Person" style={newStyle}>
                <p>My name is {this.props.name} and i work at {this.props.company} as a {this.props.children}</p>
                <button style={style} onClick={this.props.onClick}>Delete</button>
            </div>
         {/* </Aux> */}
         </Fragment> 
         //This is actually used to render the adjecant JSX components.
        
        );
    }
}

export default Radium(Person);