import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = (props) => {
  console.log("map", props)
  return (
    <Segment id="map" >
      {props.areas.map(area => <Area area={area} selectedHost={props.selectedHostId} hosts={props.hosts}/>)}
    </Segment>
  )
}

export default WestworldMap
