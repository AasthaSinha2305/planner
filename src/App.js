import React from 'react';
import {Nav} from './components/Nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {AddTrip} from './components/trip/AddTrip'



export class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      allTrips:[
        {
          place: "Delhi",
          date: "2040-4-4",
          type : "Trek"
        }
      ]
    }
  };

  render(){
    return(
      <Router>
        <div className="route-container">
          <Nav/>
          <Switch>
            <Route path="/add" render={() => <AddTrip/>} 
            />
          </Switch>
        </div>
      </Router>
    )
  }
}



export default App;
