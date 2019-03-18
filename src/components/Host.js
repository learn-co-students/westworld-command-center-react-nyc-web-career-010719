import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  return(
    <Card
      onClick={() => props.selectHost(props.host.id)}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host
