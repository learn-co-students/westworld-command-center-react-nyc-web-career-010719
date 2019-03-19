import React from 'react';
import '../stylesheets/Area.css'

import HostList from './HostList'

const Area = props => {

  const hostAssignment = () => {
    return props.hosts.filter(host => (props.area.name ===  host.area) && host.active)
  }

  return (
    <div className='area' id={props.area.name/* Pass in the area name here to make sure this is styled correctly */}>
      <h3 className='labels'>{props.area.name.split("_").map( word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")/* Don't just pass in the name from the data...clean that thing up */}</h3>
      {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}
      <HostList
        hosts={hostAssignment()}
        hostInfo={props.hostInfo}
        handleClick={props.handleClick}
      />
    </div>
  )
}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.filter(host => (props.area.name ===  host.area) && host.active).length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
