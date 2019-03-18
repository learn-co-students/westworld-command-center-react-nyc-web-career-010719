import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = (props) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const person = props.selectedHost()

  const renderSomething = () => {
    if (props.selectedHost() !== undefined) {
      return <HostInfo person={props.selectedHost()}           areas={props.areas} hosts={props.hosts} handleAreaChange={props.handleAreaChange}/>
    } else {
      return <Image size='medium' src={Images.westworldLogo}/>
    }
  }

  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

export default Details
