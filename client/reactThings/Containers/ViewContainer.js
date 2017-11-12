import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import ViewAll from '../components/viewAll'
import ViewDetail from '../components/viewDetail'

export default class View extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div>View Header</div>
        <Switch>
          <Route exact path='/view' component={ViewAll}/>
          <Route path='/view/:number' component={ViewDetail}/>
        </Switch>
      </div>
    )
  }
}
