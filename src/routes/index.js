import { useContext } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../Views/Home'
import Login from '../Views/Login'
import TouristPlaces from '../Views/TouristPlaces/TouristPlaces'
import NewPlace from '../Views/NewPlace/NewPlace'
import Events from '../Views/Events'
import { Context } from '../context/StaticContext'
import ThingsToDo from '../Views/ThingsToDo'


const Routes = () => {
  const AuthContext = useContext(Context)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/places' component={TouristPlaces}/>
        <Route exact path='/events' component={Events}/>
        <Route exact path='/thingstodo' component={ThingsToDo}/>
        <Route exact path='/new-place'>
          {AuthContext.user ? <NewPlace /> : <Redirect to='/' />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes