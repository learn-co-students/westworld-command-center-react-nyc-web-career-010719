import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import Headquarters from './components/Headquarters'
import WestworldMap from './components/WestworldMap'

class App extends Component {
  state = {
    hosts: [],
    areas: [],
    selectedHostId: null
  }
  // let areaChanged = this.state.areas.find(area => area.name === newArea.value)


  handleAreaChange = (id, newArea) => {
    this.setState( state =>
      state.hosts.forEach(host => {
        if (host.id === id) {
          host.area = newArea.value
        }
          return {hosts: state.hosts}
      }), () => console.log('changing area, do you work', this.state)
  )
}

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  fetchHosts = () => {
    fetch(`http://localhost:4000/hosts`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        hosts: data
      })
    })
  }

  fetchAreas = () => {
    fetch(`http://localhost:4000/areas`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        areas: data
      })
    })
  }

  selectHost = (selectedHostId) => {
    (console.log("im selecting", selectedHostId))
    this.setState({selectedHostId: selectedHostId})
  }

  componentDidMount(){
    this.fetchHosts()
    this.fetchAreas()
  }

  render(){
    return (
      <Segment id='app'>
        {console.log('App state', this.state)}
        <WestworldMap
          hosts={this.state.hosts}
          areas={this.state.areas}
          selectedHostId={this.state.selectedHostId}
          selectHost={this.selectHost}
        />
        <Headquarters
          hosts={this.state.hosts}
          selectedHostId={this.state.selectedHostId}
          selectHost={this.selectHost}
          areas={this.state.areas}
          handleAreaChange={this.handleAreaChange}
        />
      </Segment>
    )
  }
}

export default App;
