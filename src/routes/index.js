import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Views/Home'
import Login from '../Views/Login'
import TouristPlaces from '../Views/TouristPlaces/TouristPlaces'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/places' component={TouristPlaces}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes