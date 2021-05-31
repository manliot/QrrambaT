import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Views/Home'
import Login from '../Views/Login'
import TouristPlaces from '../Views/TouristPlaces/TouristPlaces'
import NewPlace from '../Views/NewPlace/NewPlace'
import Events from '../Views/Events'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/places' component={TouristPlaces}/>
        <Route exact path='/new-place' component={NewPlace}/>
        <Route exact path='/events' component={Events}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes