import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ToastAndroid, Alert, ImageBackground, ProgressBarAndroid,
    // ToastAndroid,
    PermissionsAndroid
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import ImgToBase64 from 'react-native-image-base64';
import RNFetchBlob from 'react-native-fetch-blob';
const config = new Config();
import Config from '../config';
import Video from 'react-native-video';
import RNBackgroundDownloader from 'react-native-background-downloader';


import _ from 'lodash';
import Sound from 'react-native-sound';
// import RNFetchBlob from 'rn-fetch-blob';
// import { videoshow } from 'videoshow';

//Service
import service from '../services/service';

var images = [
    '../images/song2.jpeg',
    '../images/song3.jpeg',
    '../images/song4.jpeg',
    '../images/song5.jpeg'
]
var videoOptions = {
    fps: 25,
    loop: 5, // seconds
    transition: true,
    transitionDuration: 1, // seconds
    videoBitrate: 1024,
    videoCodec: 'libx264',
    size: '640x?',
    audioBitrate: '128k',
    audioChannels: 2,
    format: 'mp4',
    pixelFormat: 'yuv420p'
}


// import {ffmpeg} from 'ffmpeg';
// import {fs} from 'fs';


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

export async function downloadFile() {
    console.log("FIRSt func")
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: "Storage Permission",
                message: "App needs access to memory to download the file "
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            Alert.alert("Storage Permission Granted.");
            // this.actualDownload;
        } else {
            Alert.alert(
                "Permission Denied!",
                "You need to give storage permission to download the file"
            );
        }
    } catch (err) {
        console.warn(err);
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
            ImageSource: [],
            imagePath: [],
            openVideo: false,
            videoName: '',
            paused: true,
            playVideo: false,
            progress: 0,
            loading: false,
            url: ''
        };
        this.playSound = this.playSound.bind(this)
    }

    componentDidMount() {
        // RNFFmpeg.execute('-i http://192.168.43.4/ReactFirstProject/images/song.jpeg -i http://192.168.43.4/ReactFirstProject/screens/music/frog.wav -c:v mpeg4 output.mp4').then(result => (console.log("RESULT:++++++++++++++++++++++++++",result)))

        this.pickImage();
        request_storage_runtime_permission();
        downloadFile()
    }

	/** 
	 * Select image from galary
	 */
    pickImage = () => {
        console.log("function call=========>");
        const options = {
            allowsEditing: true,
            base64: false,
            multiple: true
        };
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {

            this.setState({ ImageSource: images })
            console.log("ImageSource::::::::::::::::", this.state.ImageSource);
            images.forEach((item) => {
                let image = {
                    uri: item.path,
                    // width: item.width,
                    // height: item.height,
                }
                this.setState({
                    file: item.path
                })
            })
            this.downloadVideo();
        });
        // this.stopSound()
        // ImagePicker.launchImageLibrary(options, (response) => {
        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //     } else if (response.error) {
        //         console.log('ImagePicker Error: ', response.error);
        //     } else if (response.customButton) {
        //         console.log('User tapped custom button: ', response.customButton);
        //     } else {
        //         const source = { uri: response.uri }
        //         this.setState({ file: response.uri, imageName: response.fileName, ButtonStateHolder: false });
        //         if (this.state.file) {
        //             this.playSound()
        //         }
        //     }
        // })
    };

    playSound() {
        const item = {
            title: 'Play mp3 sound from Local',
            isRequire: true,
            url: require('./music/music.mp3'),
        }
        const index = 0;

        if (index == 0) {
            console.log("plaYMusic:", this.state.playMusic)
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
                        console.log("PLAY MUSIC:", this.state.playMusic)
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

    downloadVideo = () => {
        console.log("HELLO", this.state.ImageSource)
        // ImgToBase64.getBase64String(this.state.ImageSource[0].path)
        //     .then(base64String =>
        // var object = {};
        // object['data'] = base64String,
        // this.state.imagePath.push({'base':base64String}),
        // console.log("BASE",this.state.imagePath)
        const array = this.state.ImageSource;
        var rest = array[0].path.substring(0, array[0].path.lastIndexOf("/") + 1);
        var last = array[0].path.substring(array[0].path.lastIndexOf("/") + 1, array[0].path.length);
        // console.log(rest);
        console.log(last);
        RNFetchBlob.fetch('POST', 'http://192.168.43.4:3000/made-video', {
            'Content-Type': 'multipart/form-data',
        },
            [
                // this.state.ImageSource.map(i =>({
                //         name: 'content',
                //         data: 'this.state.content'
                //     },{
                //     name: 'images',
                //     filename: i.path.substring(i.path.lastIndexOf("/") + 1, i.path.length),// filename sadece ios da var, o yüzden android de path dan çıkarıyoruz
                //     data: RNFetchBlob.wrap(i.path)
                // })),

                {
                    name: 'content',
                    data: 'this.state.content'
                },
                {
                    name: 'images',
                    filename: last,
                    data: RNFetchBlob.wrap(array[0].path)
                },
                // {
                //     name: 'images',
                //     filename: last,
                //     data: RNFetchBlob.wrap(array[0].path)
                // },
            ]).then(response => {
                const value = response.data;
                const data = value['data'];
                console.log("RESPONSE:", JSON.parse(response.data), data);
                const URL = 'http://192.168.43.4/blogbing_4Mar/blogbing/uploads/' + response.data
                this.setState({ openVideo: true, videoName: JSON.parse(response.data) })
                console.log("OPEN:", this.state.videoName)
                return response
            })
            .catch({ status: 500, message: 'Internal Serevr Error' });
    }

    downloadImage = () => {
        console.log("DOWNLOAD IMAGE CAllingggggggggggggg")
        var date = new Date();
        var image_URL = this.state.file;
        ext = '.jpg'
        console.log("EXT+++++++++++++++++++++", ext)
        const { config, fs } = RNFetchBlob;
        let VideoDir = fs.dirs.VideoDir
        console.log("PICTURE:::::::", VideoDir)
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path: VideoDir + "/video_" + Math.floor(date.getTime()
                    + date.getSeconds() / 2) + ext,
                description: 'Video'
            }
        }
        console.log("IMAGE_URL:", image_URL);
        config(options).fetch('GET', 'http://192.168.43.4/blogbing_4Mar/blogbing/uploads/videoLatestF.mp4').then((res) => {
            // RNFFmpeg.execute('-i http://192.168.43.4/ReactFirstProject/screens/music/frog.wav -i http://192.168.43.4/ReactFirstProject/images/song.jpeg -c:v mpeg4 output.mp4').then(result => (console.log("RESULT:++++++++++++++++++++++++++",result)))
            console.log("URL:", res);

            // videoshow(images, videoOptions)
            //     .audio('song.mp3')
            //     .save('video.mp4')
            //     .on('start', function (command) {
            //         console.log('ffmpeg process started:', command)
            //     })
            //     .on('error', function (err, stdout, stderr) {
            //         console.error('Error:', err)
            //         console.error('ffmpeg stderr:', stderr)
            //     })
            //     .on('end', function (output) {
            //         console.error('Video created in:', output)
            //     })
            Alert.alert("Video Downloaded Successfully.");
        });
    }

    getExtention = (filename) => {
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) :
            undefined;
    }

    playVideo = () => {
        console.log("CALLINGGGGG")
        this.setState({ paused: false, playVideo: true })
        this.state.paused = false;
    }

    pauseVideo = () => {
        this.setState({ paused: true, playVideo: false })
    }

    actualDownload = () => {
        console.log("download file")
        this.setState({
            progress: 0,
            loading: true
        });

        // this.actualDownload;
        let dirs = RNFetchBlob.fs.dirs;
        RNFetchBlob.config({
            // add this option that makes response data to be stored as a file,
            // this is much more performant.
            path: dirs.DownloadDir + "/path-to-file.png",
            fileCache: true
        })
            .fetch(
                "GET",
                "http://192.168.43.4/blogbing_4Mar/blogbing/uploads/video_lts.mp4",
                {
                    //some headers ..
                }
            )
            .progress((received, total) => {
                console.log("progress", received / total);
                this.setState({ progress: received / total });
            })
            .then(res => {
                this.setState({
                    progress: 100,
                    loading: false
                });
                ToastAndroid.showWithGravity(
                    "Your file has been downloaded to downloads folder!",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM
                );
            });

    };

   dowloadVideoFile = () => RNBackgroundDownloader.download({
        id: 'file123',
        url: 'http://192.168.43.4/blogbing_4Mar/blogbing/uploads/video_lts.mp4',
        destination: `${RNFetchBlob.fs.dirs.DownloadDir + "/video_"+ Math.floor(new Date().getTime()
        + new Date().getSeconds() / 2)+".mp4"}`
    }).begin((expectedBytes) => {
        console.log(`Going to download ${expectedBytes} bytes!`);
    }).progress((percent) => {
        console.log(`Downloaded: ${percent * 100}%`);
    }).done(() => {
        ToastAndroid.showWithGravity(
            "Your Video has been successfully downloaded to downloads folder!",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM
        );
        console.log('Download is done!');
    }).error((error) => {
        console.log('Download canceled due to error: ', error);
    });


    render() {
        console.log('this.state========================>', this.state.videoName);
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {/* <Icon name="save"
                    size={30}
                    style={styles.saveVideo}
                /> */}
                {this.state.loading ? (
                    <ProgressBarAndroid
                        styleAttr="Large"
                        indeterminate={false}
                        progress={this.state.progress}
                    />
                ) : null}
                {this.state.openVideo ?
                    // <Icon name="save"
                    //     size={30}
                    //     style={styles.saveVideo}
                    // />
                    <View style={styles.container}>

                        <Video source={{ uri: 'http://192.168.43.4/blogbing_4Mar/blogbing/uploads/video_lts.mp4' }}   // Can be a URL or a local file.
                            ref={(ref) => {
                                this.player = ref
                            }}
                            onBuffer={this.onBuffer}
                            onError={this.videoError}
                            paused={this.state.paused}
                            style={styles.backgroundVideo} />
                        <Icon name="save"
                            size={30}
                            style={{ position: 'relative' }}
                            onPress={this.dowloadVideoFile}
                        />
                        {this.state.playVideo ? <Icon name="pause" size={40}
                            style={styles.saveVideo}
                            onPress={this.pauseVideo} /> :
                            <Icon name="play-arrow"
                                size={40}
                                style={styles.saveVideo}
                                onPress={this.playVideo}
                            />}
                        {/* <Icon name="save"
                        size={30}
                        style={styles.saveVideo}
                        onPress={this.playVideo}/> */}
                    </View> : <Text>Downloading....</Text>}
                {/* {this.state.file ?
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
                                    onPress={this.playSound}
                                /> : <Text></Text>}
                                <Icon name="save"
                                    size={30}
                                    style={styles.ChangeImageIcon}
                                    onPress={this.downloadVideo}
                                />
                            </ImageBackground>
                        </View>
                    </View> : <Text onPress={this.pickImage}>Choose a photo</Text>} */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        // borderWidth: 1,
        // borderColor: '#e1e0e0',
        // borderRadius: 10,
        width: 350,
        // padding: 20,
        height: 600,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 350,
        height: 600,
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
        color: '#000000',
        backgroundColor: '#CBCFD5',
        borderRadius: 50,
    },
    saveVideo: {
        textAlign: 'center',
        marginTop: 250,
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: 5,
        color: '#000000',
        backgroundColor: 'red',
        borderRadius: 50,
        position: 'relative'
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

