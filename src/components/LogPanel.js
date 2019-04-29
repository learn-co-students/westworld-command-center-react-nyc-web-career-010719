import React from 'react'
import { Segment, Button } from 'semantic-ui-react';
import { Log } from '../services/Log'
import uuid from 'uuid'

const LogPanel = props => {

  const handleClick = () => {
    props.toggleActivated()
  }

  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {props.eventLog.map((event) => <p key={uuid()} className={event.type}>{event.msg}</p>)}
      </pre>
      <Button
        fluid
        onClick={handleClick}
        color={props.activated ? "green" : "red"}
        content={props.activated ? "DECOMMISSION ALL" : "ACTIVATE ALL"}
      />
    </Segment>
  )
}

export default LogPanel
