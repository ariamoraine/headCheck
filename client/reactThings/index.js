import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import '../../public/index.scss'
import store from './store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './Containers/AppContainer'
import Add from './components/add'
import View from './Containers/ViewContainer'

const MainRouter = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/add' component={Add} />
      <Route path='/view' component={View} />
    </Switch>
  </main>
)
      // <Route path='/roster' component={Roster}/>
      // <Route path='/schedule' component={Schedule}/>

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
