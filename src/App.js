import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  state = {
    hosts: [],
    areas: [],
    selectedHost: null,
    selectedArea: null
  }

  fetchAll = () => {
  let hosts = []
  let areas = []
    fetch('http://localhost:4000/hosts')
    .then(r => r.json())
    .then(r => {
      hosts = r
      fetch('http://localhost:4000/areas')
      .then(r => r.json())
      .then(r => {
        areas = r
        this.setState({
          hosts: hosts,
          areas: areas
        })
      })
    })
  }

  componentDidMount(){
    this.fetchAll()
  }

  selectHost = (host) => {
    this.setState({selectedHost: host})
  }

  selectArea = (area) => {
    let newHosts = [...this.state.hosts]
    // debugger
    newHosts.map(host => host.id == this.state.selectedHost.id ? host.area = area : host)
    this.setState({
      hosts: newHosts,
      selectedArea: area
    })
  }

  render(){
    console.log(this.state)

    return (
      <Segment id='app'>
        <WestworldMap />
        {this.state.hosts.length !== 0 ? <Headquarters hosts={this.state.hosts}
        selectHost={this.selectHost} selectedHost={this.state.selectedHost}
        selectArea={this.selectArea} selectedArea={this.state.selectedArea}/> : null}
      </Segment>
    )
  }
}

export default App;
