import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
import { Log } from '../services/Log'

class HostInfo extends Component {
  state = {
    options: [],
  }

  updateOptions = () => {
    this.setState({options: this.props.formattedAreas})
  }

  componentDidMount() {
    this.updateOptions()
  }

  handleChange = (e, {value}) => {
    let newArea = this.props.areas.find( area => area.name === value)
    let hostsInArea = this.props.hosts.filter( host => host.area === value)
    if (newArea.limit < (hostsInArea.length + 1)) {
      this.props.addLog(Log.error(`Too many hosts. Cannot add ${this.props.hostInfo.firstName} to ${newArea.name.split("_").map( word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}.`))
    } else {
      this.props.updateArea(this.props.hostInfo.id, value)
      this.props.addLog(Log.notify(`${this.props.hostInfo.firstName} set in area ${newArea.name.split("_").map( word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}.`))
    }
  }

  toggle = () => {
    if (this.props.hostInfo.active) {
      this.props.addLog(Log.notify(`Decommissioned ${this.props.hostInfo.firstName}`))
      this.props.updateActivity(this.props.hostInfo.id)
    } else {
      this.props.addLog(Log.warn(`Activated ${this.props.hostInfo.firstName}`))
      this.props.updateActivity(this.props.hostInfo.id)
    }

  }

  render(){
    console.log(this.props.hostInfo.active)
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.hostInfo.imageUrl}
            floated='left'
            size='small'
            className="hostInfoImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.hostInfo.firstName} {this.props.hostInfo.lastName} | { this.props.hostInfo.gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.props.hostInfo.active ? 'Active' : 'Decommissioned'}
                  checked={this.props.hostInfo.active}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={this.props.hostInfo.area}
                options={this.state.options}
                selection
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
