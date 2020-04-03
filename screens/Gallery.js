import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ToastAndroid, Alert, ImageBackground, PermissionsAndroid, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import _ from 'lodash';
import Sound from 'react-native-sound';
import RNFetchBlob from 'rn-fetch-blob';

var sound1;

// const playList = [
//     {
//         title: 'Closer',
//         isRequire: true,
//         url: require('./music/closer.mp3'),
//         imgPath: require('../images/song1.jpeg'),
//     },
// ]

export async function request_storage_runtime_permission() {
 
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          'title': 'ReactNativeCode Storage Permission',
          'message': 'ReactNativeCode App needs access to your storage to download Photos.'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
   
        Alert.alert("Storage Permission Granted.");
      }
      else {
   
        Alert.alert("Storage Permission Not Granted");
   
      }
    } catch (err) {
      console.warn(err)
    }
  }

export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "",
            file: "",
            imageName: "",
            ButtonStateHolder: false,
            playMusic: false,
        };
        this.playSound = this.playSound.bind(this)
    }

    componentDidMount() {
        this.pickImage();
        request_storage_runtime_permission()
    }
	/** 
	 * Select image from galary
	 */
    pickImage = () => {
        console.log("function call=========>");
        const options = {
            allowsEditing: true,
            base64: false
        };
        // this.stopSound()
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri }
                this.setState({ file: response.uri, imageName: response.fileName, ButtonStateHolder: false });
                if (this.state.file) {
                    this.playSound()
                }
            }
        })
    };

    playSound() {
        const item = {
            title: 'Play mp3 sound from Local',
            isRequire: true,
            url: require('./music/music.mp3'),
        }
        const index = 0;
        
        if (index == 0) {
            console.log("plaYMusic:",this.state.playMusic)
            this.setState({
                playMusic: !this.state.playMusic
            })
            sound1 = new Sound(item.url, (error, sound) => {
                if (error) {
                    alert('error' + error.message);
                    return;
                }
                sound1.play((success) => {
                    if (success) {
                        console.log('successfully finished playing');
                        this.setState({
                            playMusic: !this.state.playMusic
                        })
                        this.stopSound()
                        console.log("PLAY MUSIC:",this.state.playMusic)
                    } else {
                        console.log('playback failed due to audio decoding errors');
                    }
                });
            });
        }
    }

    stopSound() {
        const index = 0;
        if (index == 0 && sound1) {
            sound1.stop(() => {
                console.log('Stop');
            });
        }
    }

    downloadImage = () => {
        var date = new Date();
        // var image_URL = 'https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg';
        var image_URL = this.state.file;
        // var ext = this.getExtention(image_URL);
        // ext = "." + ext[0];
        ext = '.jpg'
        console.log("EXT+++++++++++++++++++++",ext)
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir
        console.log("PICTURE:::::::",PictureDir)
        let options = {
          fileCache: true,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: PictureDir + "/image_" + Math.floor(date.getTime()
              + date.getSeconds() / 2) + ext,
            description: 'Image'
          }
        }
        console.log("IMAGE_URL:",image_URL);
        config(options).fetch('GET', 'http://192.168.43.4/ReactFirstProject/images/song.jpeg').then((res) => {
            console.log("URL:",res)
          Alert.alert("Image Downloaded Successfully.");
        });
      }
     
      getExtention = (filename) => {
          
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) :
          undefined;
      }
     

    render() {
        console.log('this.state========================>', this.state);
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {this.state.file ?
                    <View>
                        <View style={styles.ImageIcon}>
                            <ImageBackground source={{ uri: this.state.file }} style={styles.preview} >
                                <Icon name="camera-alt"
                                    size={30}
                                    style={styles.ChangeImageIcon}
                                    onPress={this.pickImage}
                                />
                                {!this.state.playMusic ? <Icon name="play-arrow"
                                    size={40}
                                    style={styles.pauseIcon}
                                    onPress={ this.playSound}
                                /> : <Text></Text>}
                                <Icon name="save"
                                    size={30}
                                    style={styles.ChangeImageIcon}
                                    onPress={this.downloadImage}
                                />
                            </ImageBackground>
                        </View>
                    </View> : <Text onPress={this.pickImage}>Choose a photo</Text>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e1e0e0',
        borderRadius: 10,
        width: 310,
        padding: 20,
        height: 'auto',
    },
    input: {
        width: 250,
        height: 44,
        padding: 4,
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        marginLeft: 10,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    button: {
        marginLeft: 4,
        marginTop: 20,
        height: 33,
        padding: 0,
        width: 260,
        backgroundColor: '#0099e7',
        borderRadius: 3,
    },
    preview: {
        height: 550,
        width: 350,
        borderRadius: 3,
        // marginTop: 5
    },
    ImageIcon: {
        textAlign: 'center',
        // marginTop: 40,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    ChangeImageIcon: {
        textAlign: 'right',
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 10,
        padding: 5,
        // marginBottom: 90,
        color: '#000000',
        backgroundColor: '#CBCFD5',
        borderRadius: 50,
    },
    pauseIcon: {
        marginTop: 165,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 5,
        color: '#000000',
        backgroundColor: '#CBCFD5',
        borderRadius: 50,
    },
});

