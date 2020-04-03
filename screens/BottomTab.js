import React, { Component } from 'react'
import { ScrollableTabView } from '@valdio/react-native-scrollable-tabview';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Tab from './BottomNavigator';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Demo from './Demo';
import Home from './Home';
import Gallery from './Gallery';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList
} from 'react-native';
import Sound from 'react-native-sound';

var sound1;

const playList = [
  {
    title: 'Closer',
    isRequire: true,
    url: require('./music/closer.mp3'),
    imgPath: require('../images/song1.jpeg'),
  },
  {
    title: 'Tum hi aana',
    isRequire: true,
    url: require('./music/tumHiAana.mp3'),
    imgPath: require('../images/song.webp'),
  },
  {
    title: 'On My Way',
    isRequire: true,
    url: require('./music/onMyWay.mp3'),
    imgPath: require('../images/song2.jpeg'),
  },
  {
    title: 'Galat',
    isRequire: true,
    url: require('./music/galat.mp3'),
    imgPath: require('../images/song3.jpeg'),
  },
  {
    title: 'Music1',
    isRequire: true,
    url: require('./music/advertising.mp3'),
    imgPath: require('../images/song4.jpeg'),
  },
  {
    title: 'Frog Music',
    isRequire: true,
    url: require('./music/frog.wav'),
    imgPath: require('../images/song5.jpeg'),
  },
];

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

// function Profile() {
//   return (
//     <ScrollableTabView
//       refreshControlStyle={{ backgroundColor: 'red' }}>
//     <ScrollView tabLabel="New" style={{ backgroundColor: '#000000' }}>
//     <FlatList data={playList} renderItem={({ item, index }) => (
//       <View style={styles.rowCard}>
//         <View style={[styles.card, { marginBottom: 10 }]}>
//           <ImageBackground style={styles.imgBackground} source={item.imgPath} >
//             {this.state.playMusic && this.state.index == index ? <Icon name="pause" size={40}
//               style={styles.ImageIcon}
//               onPress={() => {
//                 return this.stopSound(item, index, false);
//               }}
//             /> :
//               <Icon name="play-arrow"
//                 size={40}
//                  onPress={() => {
//                   return this.playSound(item, index, true);
//                 }}
//               />}
//           </ImageBackground>
//           <View style={{ flexDirection: 'row' }}>
//             <View style={{ flex: 7, flexDirection: 'column' }}>
//               <Text >{item.title}</Text>
//             </View>
//             <View style={{ flex: 5, flexDirection: 'column' }}>
//               <View style={{ flexDirection: 'row' }}>
//                 <View style={{ flex: 6, flexDirection: 'column' }}>
//                   <Icon name="share"
//                     size={23}
//                     style={styles.BelowShareIcon}
//                   />
//                 </View>
//                 <View style={{ flex: 6, flexDirection: 'column' }}>
//                   <Icon name="arrow-downward"
//                     size={25}
//                     style={styles.BelowIcon}
//                   />
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     )}
//       numColumns={2}
//     />
  
//     {/* <Tab/> */}
//   </ScrollView>
//   <ScrollView tabLabel="Popular" >
//     <View>
//       <Text>Two</Text>
//     </View>
//   </ScrollView>
//   <ScrollView tabLabel="Navratri" >
//     <View>
//       <Text>Three</Text>
//     </View>
//   </ScrollView>
//   <ScrollView tabLabel="Wish" >
//     <View>
//       <Text>Four</Text>
//     </View>
//   </ScrollView>
//   <ScrollView tabLabel="TicTok" >
//     <View>
//       <Text>Five</Text>
//     </View>
//   </ScrollView>
// </ScrollableTabView>
//   );
// }

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       tabBarOptions={{
//         activeTintColor: '#e91e63',
//       }}
//     >
//       <Tab.Screen
//         name="Feed"
//         component={Feed}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="bell" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="account" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }


export default class BottomTab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playMusic: false,
      index: '',
      oldindex: '',
      sound: ''
    };
  }

  Profile() {
    return (
      <ScrollableTabView
        refreshControlStyle={{ backgroundColor: 'red' }}>
      <ScrollView tabLabel="New" style={{ backgroundColor: '#000000' }}>
      <FlatList data={playList} renderItem={({ item, index }) => (
        <View style={styles.rowCard}>
          <View style={[styles.card, { marginBottom: 10 }]}>
            <ImageBackground style={styles.imgBackground} source={item.imgPath} >
              {this.state.playMusic && this.state.index == index ? <Icon name="pause" size={40}
                style={styles.ImageIcon}
                onPress={() => {
                  return this.stopSound(item, index, false);
                }}
              /> :
                <Icon name="play-arrow"
                  size={40}
                   onPress={() => {
                    return this.playSound(item, index, true);
                  }}
                />}
            </ImageBackground>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 7, flexDirection: 'column' }}>
                <Text >{item.title}</Text>
              </View>
              <View style={{ flex: 5, flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 6, flexDirection: 'column' }}>
                    <Icon name="share"
                      size={23}
                      style={styles.BelowShareIcon}
                    />
                  </View>
                  <View style={{ flex: 6, flexDirection: 'column' }}>
                    <Icon name="arrow-downward"
                      size={25}
                      style={styles.BelowIcon}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
        numColumns={2}
      />
    
      {/* <Tab/> */}
    </ScrollView>
    <ScrollView tabLabel="Popular" >
      <View>
        <Text>Two</Text>
      </View>
    </ScrollView>
    <ScrollView tabLabel="Navratri" >
      <View>
        <Text>Three</Text>
      </View>
    </ScrollView>
    <ScrollView tabLabel="Wish" >
      <View>
        <Text>Four</Text>
      </View>
    </ScrollView>
    <ScrollView tabLabel="TicTok" >
      <View>
        <Text>Five</Text>
      </View>
    </ScrollView>
  </ScrollableTabView>
    );
  }

  //execute callback in order to stop the refresh animation. 
  _onRefresh = (callback) => {
    networkRequest().then(response => callback(response))
  }

  playSound(item, index, flag) {
    this.state.playMusic = flag;
    this.state.index = index;
    this.setState({
      index: index,
      oldindex: index
    })
    console.log("PLAY MUSIC FLAG1:", this.state.playMusic, this.state.index);
    const playIndex = index + 1;
    sound1 = new Sound(item.url, (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      if (this.state.sound) {
        this.state.sound.pause();
      }
      this.state.sound = sound1;
      this.state.sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
          this.setState({
            playMusic: !this.state.playMusic
          })
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  }

  stopSound(item, index, flag) {
    this.state.sound.stop(() => {
      this.setState({
        playMusic: flag
      })
    });
  }

  render() {
    return(
        <NavigationContainer>
          <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Gallery}
        options={{
          tabBarLabel: 'Add Photo',
          tabBarIcon: ({ color, size }) => (
            <Icon name="add" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Demo}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
        </NavigationContainer>
    )
  }
}




const styles = StyleSheet.create({
  rowCard: {
    marginLeft: 5,
    marginRight: 5,
    flex: 1
  },
  card: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '#fdfdfd',
    flex: 6
  },
  imgBackground: {
    width: '100%',
    height: 'auto',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#000000',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  signUpView: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e1e0e0',
    borderRadius: 10,
    padding: 20,
    marginTop: 15,
    height: 'auto'
  },
  preview: {
    height: 250,
    width: 250,
    borderRadius: 3,
    marginTop: 1
  },
  image: {
    // flex: 10,
    height: 300,
    width: 300,
    resizeMode: "cover",
    justifyContent: "center"
  },
  headerTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(00,00,80,1)',
  },
  buttonPlay: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(00,80,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  buttonStop: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(80,00,00,1)',
    borderWidth: 1,
    borderColor: 'rgba(80,80,80,0.5)',
    overflow: 'hidden',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  feature: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(180,180,180)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(230,230,230)',
  },
  ImageIcon: {
    textAlign: 'center',
    marginTop: 90,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 90,
    color: '#ffffff',
    backgroundColor: '#000000',
    borderRadius: 50,
  },
  BelowIcon: {
    color: '#ffffff',
    backgroundColor: '#000000',
    borderRadius: 50,
    margin: 5
  },
  BelowShareIcon: {
    color: '#ffffff',
    backgroundColor: '#000000',
    borderRadius: 50,
    margin: 5,
    padding: 1,
    textAlign: 'center'
  }
});