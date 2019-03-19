import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = props => {

  const renderSomething = () => {
    return props.hostInfo ?
    <HostInfo
      hosts={props.hosts}
      areas={props.areas}
      hostInfo={props.hostInfo}
      updateActivity={props.updateActivity}
      formattedAreas={props.formattedAreas}
      updateArea={props.updateArea}
      addLog={props.addLog}
    /> :
      (<Image size='medium' src={Images.westworldLogo}/>)
  }

  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

export default Details
