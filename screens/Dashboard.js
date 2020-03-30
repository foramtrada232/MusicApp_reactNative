import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Sound from 'react-native-sound';


const audioList = [
  {
    title: 'Play mp3 sound from Local',
    isRequire: true,
    url: require('./advertising.mp3'),
  },
]

var sound1, sound2, sound3, sound4, sound5, sound6;

function playSound(item, index) {
  console.log("data:", item, index)
  if (index == 0) {
    sound1 = new Sound(item.url, (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      sound1.play(() => {
        sound1.release();
      });
    });
  }
}

function stopSound(item, index) {
  if (index == 0 && sound1) {
    sound1.stop(() => {
      console.log('Stop');
    });
  }
}

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    Sound.setCategory('Playback', true);
    state = {
      file: '',
      content: '',
      tests: {}
    }
  }

  componentDidMount() {
    console.log("PROPSSSSSSSSSSS::::::::++++++++++++++", this.props.navigation.state);
    const filePath = this.props.navigation.state.params.content;
    const item =  {
      title: 'Play mp3 sound from Local',
      isRequire: true,
      url: require('./advertising.mp3'),
    }
    const index = 0
    playSound(item, index)
  }



  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: this.props.navigation.state.params.file }} style={styles.image}>
          <Text style={styles.text}>Inside</Text>
          {audioList.map((item, index) => {
            return (
              <View style={styles.feature} key={item.title}>
                <Text style={{ flex: 1, fontSize: 14 }}>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    return stopSound(item, index);
                  }}>
                  <Text style={styles.buttonStop}>Stop</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ImageBackground>
        {this.props.navigation.state.params.content ?
          <Text>{this.props.navigation.state.params.content}</Text> :
          <Text>HEllo Foram</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
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
});