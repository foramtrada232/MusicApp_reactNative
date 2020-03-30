import React, { Component } from 'react'
import { ScrollableTabView } from '@valdio/react-native-scrollable-tabview';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  CheckBox,
  ImageBackground
} from 'react-native';
import Sound from 'react-native-sound';

const item = {
  title: 'Play mp3 sound from Local',
  isRequire: true,
  url: require('./closer.mp3'),
}
const item1 = {
  title: 'Play wav sound from Local',
  isRequire: true,
  url: require('./tumHiAana.mp3'),
}
// const index = 0;
var sound1, sound2, sound3, sound4, sound5, sound6;


export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playMusic: true,
      index: '',
      oldindex: ''
    };
  }


  //execute callback in order to stop the refresh animation. 
  _onRefresh = (callback) => {
    networkRequest().then(response => callback(response))
  }

  playSound(item, index) {
    console.log("data:", item, index)
    this.setState({
      playMusic: !this.state.playMusic,
      index : index,
      oldindex : index
    })
    console.log("state value:",this.state)
    if (index == 0) {
      {
        this.state.playMusic ?
        sound1 = new Sound(item.url, (error, sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound1.play(() => {
            sound1.release();
          });
        }) : sound1.stop(() => {
          console.log('Stop');
        });
      }
    } else if (index == 1) {
      {
        this.state.playMusic ?
        sound2 = new Sound(item1.url, (error, sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          sound2.play(() => {
            sound2.release();
          });
        }) : sound2.stop(() => {
          console.log('Stop');
        });
      }
    } 
  }



  render() {
    return <ScrollableTabView
      refreshControlStyle={{ backgroundColor: 'red' }}
    >
      <ScrollView tabLabel="New" style={{ backgroundColor: '#000000' }}>
        <View style={[styles.rowCard, { flexDirection: 'row' }]}>
          <View style={[styles.card, { flex: 6, flexDirection: 'column' }]}>
            <ImageBackground style={styles.imgBackground} source={require('../images/song1.jpeg')} >
              <Icon name="play-arrow"
                size={40}
                style={styles.ImageIcon}
                onPress={() => {
                  return this.playSound(item, 0);
                }}

              />
            </ImageBackground>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 7, flexDirection: 'column' }}>
                <Text >Sorry</Text>
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
          <View style={[styles.card, { flex: 6, flexDirection: 'column' }]}>
            <ImageBackground style={styles.imgBackground} source={require('../images/song.webp')} >
              <Icon name="play-arrow"
                size={40}
                style={styles.ImageIcon}
                onPress={() => {
                  return this.playSound(item, 1);
                }}
              />
            </ImageBackground>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 7, flexDirection: 'column' }}>
                <Text >Love Me</Text>
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
        <View style={[styles.rowCard, { flexDirection: 'row' }]}>
          <View style={[styles.card, { flex: 6, flexDirection: 'column' }]}>
            <ImageBackground style={styles.imgBackground} source={require('../images/song2.jpeg')} >
              <Icon name="play-arrow"
                size={40}
                style={styles.ImageIcon}
                onPress={() => {
                  return this.playSound(item, index);
                }}
              />
            </ImageBackground>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 7, flexDirection: 'column' }}>
                <Text >See You Again</Text>
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
          <View style={[styles.card, { flex: 6, flexDirection: 'column' }]}>
            <ImageBackground style={styles.imgBackground} source={require('../images/song3.jpeg')} >
              <Icon name="play-arrow"
                size={40}
                style={styles.ImageIcon}
                onPress={() => {
                  return this.playSound(item, index);
                }}
              />
            </ImageBackground>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 7, flexDirection: 'column' }}>
                <Text >Closer</Text>
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
        <View style={[styles.rowCard, { flexDirection: 'row' }]}>
          <View style={[styles.card, { flex: 6, flexDirection: 'column' }]}>
            <ImageBackground style={styles.imgBackground} source={require('../images/song4.jpeg')} >
              <Icon name="play-arrow"
                size={40}
                style={styles.ImageIcon}
                onPress={() => {
                  return this.playSound(item, index);
                }}
              />
            </ImageBackground>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 7, flexDirection: 'column' }}>
                <Text >Haan Mai Galat</Text>
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
          <View style={[styles.card, { flex: 6, flexDirection: 'column' }]}>
            <ImageBackground style={styles.imgBackground} source={require('../images/song5.jpeg')} >
              <Icon name="play-arrow"
                size={40}
                style={styles.ImageIcon}
              />
            </ImageBackground>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 7, flexDirection: 'column' }}>
                <Text >Pachtaoge</Text>
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
  }
}




const styles = StyleSheet.create({
  rowCard: {
    marginBottom: 10,

  },
  card: {
    // backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    width: '100%',
    margin: 5,
    height: '100%',
    backgroundColor: '#fdfdfd'
  },
  imgBackground: {
    width: '100%',
    // borderRadius: 20,
    height: 'auto',
    // marginTop: 1
    // marginLeft: 5
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