import React from 'react';
import './App.css'

function Message(props) {
    return(
    <h1>the currnet value of counter is:{props.count}</h1>
    );
}
export default Message;