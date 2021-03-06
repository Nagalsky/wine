import React, { Component } from 'react'

import Layout from './components/Layout'

import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Home />
        </Layout>
      </React.Fragment>
    )
  }
}

export default App
