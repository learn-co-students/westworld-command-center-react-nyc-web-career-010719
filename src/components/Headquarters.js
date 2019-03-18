import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import HostList from './HostList'


class Headquarters extends Component {
  selectedHost = () =>{
    let hosts = this.props.hosts
    let clickedHost = hosts.find(host => host.id === this.props.selectedHostId)
    return clickedHost
  }

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>
          <HostList
            hosts={this.props.hosts}
            selectedHostId={this.props.selectedHostId}
            selectHost={this.props.selectHost}
            areas={this.props.areas}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Details
            hosts={this.props.hosts}
            selectedHost={this.selectedHost}           areas={this.props.areas}
            handleAreaChange={this.props.handleAreaChange}
          />
        </Grid.Column>
        <Grid.Column width={3}>

        {/* and here. Take visual cues from the screenshot/video in the Readme. */}

        </Grid.Column>
      </Grid>
    )

  }
}

export default Headquarters;
