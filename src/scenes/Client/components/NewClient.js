import React, { Component } from 'react'

import { Tab } from 'semantic-ui-react'

import NaturalPerson from './NaturalPerson'

const panes = [
  { menuItem: 'Pessoa Física', render: () => <Tab.Pane> <NaturalPerson /> </Tab.Pane> },
  { menuItem: 'Pessoa Jurídica', render: () => <Tab.Pane><h1>Teste</h1></Tab.Pane> }
]

class NewClient extends Component {
    render() {
        return (
            <Tab panes={panes} />
        )
    }
}

export default NewClient