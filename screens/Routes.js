import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Signup from './Signup.js'
import Login from './Login.js';
import Status from './Status';
import Dashboard from './Dashboard';
import Music from './Music';
import Home from './Home';

const Routes = () => (

   <Router>
      <Scene key = "root">
         <Scene key = "Login" component = {Login} title = "Login" />
         <Scene key = "Signup" component = {Signup} title = "Signup" />
         <Scene key = "Status" component = {Status} title = "Status" />
         <Scene key = "Dashboard" component = {Dashboard} title = "Dashboard" />
         <Scene key = "Music" component = {Music} title = "Music" />
         <Scene key = "Home" component = {Home} title = "Home" initial = {true}/>
      </Scene>
   </Router>
)
export default Routes;