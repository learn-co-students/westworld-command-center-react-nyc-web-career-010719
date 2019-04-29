import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = props => {
  
  let selected = ''

  if (props.hostInfo) {
    if (props.hostInfo.id === props.host.id) {
      selected = 'host selected'
    } else {
      selected = 'host'
    }
  } else {
    selected = 'host'
  }

  return(
    <Card
      className={selected}
      onClick={() => props.handleClick(props.host.id) /* On Click what? */}
      image={props.host.imageUrl /* I wonder what goes here...*/}
      raised
    />
  )
}

export default Host
