import React from 'react'
import HostInfo from './HostInfo'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'


const Details = (props) => {
  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.

  const renderSomething = () => {
    if (!props.selectedHost)
      return <Image size='medium' src={Images.westworldLogo}/>
    else
      return <HostInfo host={props.selectedHost}
        selectArea={props.selectArea} selectedArea={props.selectedArea}
      />
  }

  return(
    <Segment id="details" className="HQComps">
      {renderSomething()}
    </Segment>
  )
}

export default Details

// {renderSomething()}
