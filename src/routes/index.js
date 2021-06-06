import { useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Views/Home'
import Login from '../Views/Login'
import TouristPlaces from '../Views/TouristPlaces/TouristPlaces'
import NewPlace from '../Views/NewPlace/NewPlace'
import TouristServices from '../Views/TouristServices/TouristServices'

import PlaceDetails from '../Views/PlaceDetails/PlaceDetails'
import Events from '../Views/Events'
import EventDetails from '../Views/Events/detail'
import ThingsToDo from '../Views/ThingsToDo'
import NewEvent from '../Views/NewEvent/NewEvent'
import News from '../Views/News/News'
import NewService from '../Views/NewService/NewService'
import styles from '../App.css'


const Routes = () => {

  return (
    <div className={styles['contenedor']}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/places' component={TouristPlaces} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/event-details' component={EventDetails} />
          <Route exact path='/thingstodo' component={ThingsToDo} />
          <Route exact path='/new-event' component={NewEvent} />
          <Route exact path='/news' component={News} />
          <Route exact path='/new-service' component={NewService} />
          <Route exact path='/new-place' component={NewPlace} />
          <Route exact path='/place-details' component={PlaceDetails} />
          <Route exact path='/services' component={TouristServices} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes