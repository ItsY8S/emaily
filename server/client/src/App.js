import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <a href="/auth/google">Sign in with Google</a>
        <a href="/auth/twitter">Sign in with Twitter</a>
      </div>
    )
  }
}

export default App
