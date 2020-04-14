
const ip = 'http://192.168.43.4';

class Config {
	getBaseUrl() {
		let baseurl;
		// return baseurl = ip +':3000/';
		return baseurl = 'https://blogbing.herokuapp.com/';
		// return baseurl = ip;
	}
	getMediaUrl() {
		let baseMediaUrl;
		// return baseMediaUrl = ip + "/MusicApp-Backend/uploads/";
		return baseMediaUrl = 'https://blogbing.herokuapp.com/';
		// return baseMediaUrl = ip;
	}
}
export default Config