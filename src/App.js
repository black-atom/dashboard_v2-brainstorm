import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'

import NewClient from './scenes/Client/components/NewClient'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar /> 
         <main style={{margin: '15px'}}>
          <NewClient />
         </main>
      </div>
    )
  }
}

export default App

