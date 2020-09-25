import React from 'react';
import './User.css';

export default function userOutput(props) {
    return (
        <div className="User">
            <p>Welcome {props.username}</p>
            <p>Hello this is My website</p>
        </div>
        
    );
}

export function UserInput(props) {
    return (
        <div>
            <input value={props.username} onChange={props.changeUser} />
        </div>
    );
}