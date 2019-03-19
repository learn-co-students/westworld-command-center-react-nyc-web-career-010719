import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';

import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'
import { Log } from '../services/Log'


class Headquarters extends Component {

  state = {
    activated: false,
    eventLog: [],
  }

  addLog = (event) => {
    this.setState({
      eventLog: [event, ...this.state.eventLog]
    })
  }

  toggleActivated = () => {
    this.setState({activated: !this.state.activated}, () => {
      if (this.props.hostInfo) {
        if (this.state.activated) {
          this.addLog(Log.warn(`Activating all hosts!`))
          this.props.activateAllHost(this.state.activated,this.props.hostInfo.id)
        } else {
          this.addLog(Log.notify(`Decommissiong all hosts.`))
          this.props.activateAllHost(this.state.activated,this.props.hostInfo.id)
        }
      } else {
        if (this.state.activated) {
          this.addLog(Log.warn(`Activating all hosts!`))
          this.props.activateAllHost(this.state.activated)
        } else {
          this.addLog(Log.notify(`Decommissiong all hosts.`))
          this.props.activateAllHost(this.state.activated)
        }
      }
    })
  }

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>
          <ColdStorage
            hosts={this.props.hosts}
            hostInfo={this.props.hostInfo}
            handleClick={this.props.handleClick}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Details
            hosts={this.props.hosts}
            areas={this.props.areas}
            hostInfo={this.props.hostInfo}
            updateActivity={this.props.updateActivity}
            formattedAreas={this.props.formattedAreas}
            updateArea={this.props.updateArea}
            addLog={this.addLog}
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <LogPanel
            activated={this.state.activated}
            toggleActivated={this.toggleActivated}
            hostInfo={this.props.hostInfo}
            addLog={this.addLog}
            eventLog={this.state.eventLog}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
