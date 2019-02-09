import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Dashboard from './Dashboard'
import Landing from './Landing'
import SurveyNew from './SurveyNew'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </>
      </BrowserRouter>
    )
  }
}

export default App
