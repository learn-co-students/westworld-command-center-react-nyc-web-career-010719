import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = (props) => {
  // debugger
  console.log(props)

  const renderHosts = () => {
    return props.hosts.map(host => {
      return <Host host={host} selectHost={props.selectHost}/>
    })
  }


  return(
    <Card.Group itemsPerRow={6}>
      {renderHosts()}
    </Card.Group>
  )
}

export default HostList


// {/* What do you think, partner? */}
// <Host hosts={props.hosts}/>
