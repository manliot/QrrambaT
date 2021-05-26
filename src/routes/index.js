import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Views/Home'
import Login from '../Views/Login'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes