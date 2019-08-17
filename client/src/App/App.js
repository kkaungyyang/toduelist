import React, { Component } from 'react';
import './App.css';

// import { Route, Switch } from 'react-router-dom';
// import Home from './pages/Home';
// import List from './pages/List';

class App extends Component {
  constructor(props) {
    super(props); 

    this.state = { lat: null, errorMessage: '' }; 

    
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude }); 
      }, 
      err => {
        this.setState({ errorMessage: err.message }); 
      }
    )
  }

  render() {
      if (this.state.errorMessage && !this.state.lat) {
        return <div> Error: {this.state.errorMessage} </div>  
      }

      if(!this.state.errorMessage && this.state.lat) {
        return <div>Latitudate: {this.state.lat}</div>
      }

      return <div>Loading!</div> 

  }
  
  
  // render() {
  //   const App = () => (
  //     <div>
  //       <Switch>
  //         <Route exact path='/' component={Home}/>
  //         <Route path='/list' component={List}/>
  //       </Switch>
  //       Latitude: {this.state.lat}
  //     </div>
  //   )
  //   return (
  //     <Switch>
  //       <App/>
  //     </Switch>
  //   );
  // }
}

export default App;