import React from 'react';
import { Segment } from 'semantic-ui-react'
import Host from './Host'

const ColdStorage = (props) => (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>
    {props.hosts.map(host => <Host host={host}       selectedHostId={props.selectedHostId} selectHost={props.selectHost} areas={props.areas}
/>)}
      {/* Cold Storage contains hosts....but how? Directly? Or is there something else we could use to contain them... */}

    </Segment>
  </Segment.Group>
)

export default ColdStorage
