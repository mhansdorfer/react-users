import React from 'react';
//import './App.css';
import UserList from './UserList.js'

class App extends React.Component {

  render(){
    return (
      <div style={{backgroundColor: "#efefef", paddingTop: "50px", paddingBottom: "50px"}}>
        <UserList/>
      </div>
    );
  }
}

export default App;