import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'



class App extends Component {

  render(){
    return (
      <Segment id='app'>
        <WestworldMap />
      </Segment>
    )
  }
}

export default App;
