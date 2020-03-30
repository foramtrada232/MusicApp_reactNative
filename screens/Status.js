import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ToastAndroid, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import _ from 'lodash';


export default class Status extends Component {
	constructor(props) {
		super(props)
		this.state = {
			content: "",
			file: "",
			imageName: "",
			ButtonStateHolder: false,
		};
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
			}
		})
	};

	
	render() {
		console.log('this.state========================>', this.state);
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				{/* Add post Form */}
				<View style={[styles.container, { marginTop: 70 }]}>
					<Text style={styles.titleText} onPress={this.pickImage}>Add Post</Text>
					<View style={{ flexDirection: 'row' }}>
						{!this.state.file ? <Icon name="collections"
							size={70}
							onPress={this.pickImage}
							style={styles.ImageIcon}
						/> : <View style={styles.ImageIcon}>
								<TouchableOpacity
									onPress={this.pickImage}
								>
									<Image source={{ uri: this.state.file }} style={styles.preview} />
								</TouchableOpacity>
							</View>}
					</View>
					<TextInput
						value={this.state.content}
						onChangeText={(content) => this.setState({ content: content })}
						placeholder={'Caption'}
						style={styles.input}
					/>
					<TouchableOpacity
						style={[styles.button, { backgroundColor: this.state.ButtonStateHolder ? '#607D8B' : '#0099e7' }]}>
						<Text style={{ textAlign: 'center', marginTop: 5, color: 'white' }} onPress={() => this.props.navigation.navigate('Music')}>Add Music</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.button, { backgroundColor: this.state.ButtonStateHolder ? '#607D8B' : '#0099e7' }]}>
						<Text style={{ textAlign: 'center', marginTop: 5, color: 'white' }} onPress={() => this.props.navigation.navigate('Dashboard',{file:this.state.file,content: this.state.content})}> Post</Text>
					</TouchableOpacity>
				</View>
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
		height: 120,
		width: 120,
		borderRadius: 3,
		marginTop: 5
	},
	ImageIcon: {
		textAlign: 'center',
		marginTop: 40,
		marginLeft: 'auto',
		marginRight: 'auto'
	}
});

