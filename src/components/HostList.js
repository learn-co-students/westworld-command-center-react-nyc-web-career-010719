import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = props => {

  const renderHost = () => {
    return props.hosts.map(host => <Host key={host.id} host={host}  handleClick={props.handleClick} hostInfo={props.hostInfo}/>)
  }

  return(
    <Card.Group itemsPerRow={6}>
      {renderHost()}
    </Card.Group>
  )
}

export default HostList
