import React from 'react';
import '../stylesheets/Area.css'

const Area = (props) => {
  console.log("area", props)

  function renderHostsByArea(){
    let findHost = props.hosts.find(host => {
      if (host.id == props.selectedHost) {
        let hostArea = host.area
        if (hostArea === 'under_construction') {
          return host.firstName
        }
      }

    })
  console.log(findHost)
  return findHost
  }

  return (
    <div className='area' id={props.area.name}>
      <h3 className='labels'>{props.area.name.split("_").join(" ").toUpperCase()}</h3>

      <p>{renderHostsByArea()}</p>
      // {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}

    </div>
  )
}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
