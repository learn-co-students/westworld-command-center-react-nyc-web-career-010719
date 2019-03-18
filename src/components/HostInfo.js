import '../stylesheets/HostInfo.css'
import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component {
  // const dropdownoptions = this.props.areas.map(area => {key: `${area.name}` text: `${area.name}` value: `${area.name}`})

  state = {
    options: this.props.areas,
    active: false

    // options: [{key: "some_area" text: "Some Area" value: "some_area"}, {key: "another_area" text: "Another Area" value: "another_area"}],
    // value: "some_area",
    // This state is just to show how the dropdown component works.
    // Options have to be formatted in this way (array of objects with keys of: key, text, value)
    // Value has to match the value in the object to render the right text.

    // IMPORTANT: But whether it should be stateful or not is entirely up to you. Change this component however you like.
  }


  handleChange = (e, {value}) => {
    let val = {value}
    this.setState({value})
    this.props.handleAreaChange(this.props.person.id, {value})
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  formatNames = () => {
    let areas = this.props.areas
    return areas.map(area => {
      return { key: `${area.id}`,text: `${area.name.split("_").join(" ")}`, value: `${area.name}` }}
    )
  }


  toggle = () => {
    console.log("The radio button fired");
    this.setState({active: !this.state.active})
  }

  render(){
    const options = this.formatNames()
    console.log(this.props)
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image
            src={this.props.person.imageUrl}
            floated='left'
            size='small'
            className="hostImg"
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.person.firstName} | {this.props.person.gender == 'Male' ? <Icon name='man' /> : <Icon name='woman' />}
                // { /* Think about how the above should work to conditionally render the right First Name and the right gender Icon */ }
              </Card.Header>
              <Card.Meta>
                <Radio
                  onChange={this.toggle}
                  label={this.state.active ? "Active" : "Decommissioned"}
                  // {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
                  checked={this.state.active}
                  // {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
                  slider
                />
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                options={options}
                value={this.props.person.area}
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
