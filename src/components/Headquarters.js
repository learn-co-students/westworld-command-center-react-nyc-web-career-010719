import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';

import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'



class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.
  state = {
    activated: false
  }

  toggleActivated = () => {
    console.log('firing')
    this.setState({activated: !this.state.activated}, () => {
      if (this.props.hostInfo) {
        this.props.activateAllHost(this.state.activated,this.props.hostInfo.id)
      } else {
        this.props.activateAllHost(this.state.activated)
      }
    })
  }

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        {/* Something goes here.... */}
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
          />
        </Grid.Column>
        <Grid.Column width={3}>

        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
          <LogPanel
            activated={this.state.activated}
            toggleActivated={this.toggleActivated}
            hostInfo={this.props.hostInfo}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
