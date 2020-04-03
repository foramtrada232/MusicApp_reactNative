import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home';
import Demo from './Demo';
import BottomTab from './BottomTab';
import Gallery from './Gallery';
// import Tabs from './BottomNavigator';


import {
   // createStackNavigator,
   createAppContainer,
   createMaterialTopTabNavigator
 } from "react-navigation";

 import {
   createStackNavigator
 } from "react-navigation-stack";

// const Routes = () => (

//    <Router>
//       <Scene key = "root">
//          <Scene key = "Home" component = {Home} title = "Home" initial = {true}/>
//       </Scene>
//    </Router>
// )

const MainNavigator = createStackNavigator({
   BottomTab: {
		screen: BottomTab,
		// navigationOptions: {
		// 	header: null
		// }
	},
   Home: {
     screen: Home,
   //   navigationOptions: {
   //     header: null
   //   }
   },

   Gallery: {
      screen: Gallery,
    //   navigationOptions: {
    //     header: null
    //   }
    },
 
   Demo: {
     screen: Demo,
     navigationOptions: {
       header: null
     }
   },
 
  
 });
 
 const Routes = createAppContainer(MainNavigator);
 export default Routes;

// export default Routes;