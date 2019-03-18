import React from 'react'
import { Card } from 'semantic-ui-react'
import ColdStorage from './ColdStorage'

const HostList = (props) => {
  return(
    <Card.Group itemsPerRow={6}>
      <ColdStorage
        hosts={props.hosts}
        selectedHostId={props.selectedHostId}
        selectHost={props.selectHost}
        areas={props.areas}
      />
    </Card.Group>
  )
}

export default HostList
