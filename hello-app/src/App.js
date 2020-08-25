import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetComp from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import DispalyName from './components/nameDisplay'
import Message from './components/Message'
import Increment from './components/Increment'

function App() {
  return (
    <div className="App">
       {/* <GreetComp></GreetComp> */}
       {/* <Welcome/> */}
       {/* <Hello /> */}
       {/*<DispalyName name="Aditya" lastName="Pal">
       <span>Hello Aditya Pal</span>
       </DispalyName>
       <DispalyName name="Ravi" lastName="Kohli"/>
       <DispalyName name="Alok" lastName="tiwari"/>
       <Welcome friendName="navin"/> 
       <Message /> */ }
       <Increment />
    </div>
  );
}

export default App;
