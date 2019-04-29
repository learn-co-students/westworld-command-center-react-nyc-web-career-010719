import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList.js';

const ColdStorage = (props) => {
  console.log(props)

  return(
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
     <Segment compact>
      <HostList hosts={props.hosts}
        selectHost={props.selectHost}
      />

        {/* Cold Storage contains hosts....but how? Directly? Or is there something else we could use to contain them... */}

      </Segment>
    </Segment.Group>
  )
  }

export default ColdStorage
