import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'
import Headquarters from './Headquarters'
import uuid from 'uuid'

class WestworldMap extends React.Component {
  state = {
    areas: [],
    hosts: [],
    hostInfo: null,
    formattedAreas: [],
  }

  fetchHosts = () => {
    const host_url = 'http://localhost:4000/hosts'
    fetch(host_url)
    .then(r => r.json())
    .then(hosts => this.setState({hosts}))
  }

  fetchAreas = () =>  {
    const area_url = 'http://localhost:4000/areas'
    fetch(area_url)
    .then(r => r.json())
    .then(areas => this.setState({areas}, () => this.formattedAreas()))
  }

  componentDidMount() {
    this.fetchHosts()
    this.fetchAreas()
  }

  renderAreas = () => {
    return this.state.areas.map(area => <Area
      key={area.name}
      area={area}
      limit={area.limit}
      hosts={this.state.hosts}
      handleClick={this.handleClick}
      hostInfo={this.state.hostInfo}/>)
  }

  handleClick = (id) => {
    let hostInfo = this.state.hosts.find(host => host.id === id)
    this.setState({ hostInfo })
  }

  updateActivity = (id) => {
    let copyHosts = [...this.state.hosts].map(host => {
      if (id === host.id) {
        return {...host, active: !host.active}
      }
      return host
    })
    let hostInfo = copyHosts.find(host => host.id === id)
    this.setState({ hosts: copyHosts, hostInfo })
  }

  formattedAreas = () => {
    let formattedAreas = this.state.areas.map(area => {
      return (
        {
          key: area.name,
          text: area.name.split("_").map( word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
          value: area.name
        }
      )
    })
    this.setState({ formattedAreas })
  }

  updateArea = (id, location) => {
    let copyHost = [...this.state.hosts].map( host => {
      if (id === host.id) {
        return {...host, area: location}
      }
      return host
    })
    let hostInfo = copyHost.find(host => host.id === id)
    this.setState({hosts: copyHost, hostInfo})
  }

  activateAllHost = (id = 0) => {
    let copyHosts = [...this.state.hosts].map( host => {
      return {...host, active: !host.active}
    })
    let hostInfo = copyHosts.find(host => host.id === id)
    this.setState({ hosts: copyHosts, hostInfo})
  }

  render() {
    return (
      <React.Fragment>
        <Segment id="map" >
          {/* What should we render on the map? */}
          {this.renderAreas()}
        </Segment>
        <Headquarters
          hosts={this.state.hosts}
          areas={this.state.areas}
          hostInfo={this.state.hostInfo}
          handleClick={this.handleClick}
          updateActivity={this.updateActivity}
          formattedAreas={this.state.formattedAreas}
          updateArea={this.updateArea}
          activateAllHost={this.activateAllHost}
        />
      </React.Fragment>
    )
  }
}

export default WestworldMap
