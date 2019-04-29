import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = (props) => {
  // debugger

  return(
    <Card
      className="host selected"
      onClick={() => props.selectHost(props.host)}
      image={props.host.imageUrl}
      raised
    />
  )
}

export default Host

// {/* NOTE: The className "host selected" renders a different style than simply "host". */}
