import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {
  state = {
    options: [],
    // This state is just to show how the dropdown component works.
    // Options have to be formatted in this way (array of objects with keys of: key, text, value)
    // Value has to match the value in the object to render the right text.

    // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
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
    if (newArea.limit < (hostsInArea + 1)) {
      null
    } else {
      this.props.updateArea(this.props.hostInfo.id, value)
    }
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  toggle = () => {
    console.log("The radio button fired");
    this.props.updateActivity(this.props.hostInfo.id)
  }

  render(){
    console.log(this.props.hostInfo.active)
    return (
      <Grid>
        <Grid.Column width={6}>
          { /* pass in the right image here */ }
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
                { /* Think about how the above should work to conditionally render the right First Name and the right gender Icon */ }
              </Card.Header>
              <Card.Meta>
                {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
                {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
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
