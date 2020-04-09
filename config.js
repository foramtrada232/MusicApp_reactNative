// const ip = 'http://photosharing.raoinformationtechnology-conduct.tk';
const ip = 'http://192.168.43.4';
// const ip ='http://photosharing.raoinformationtechnology.com';
// const ip = 'https://protected-peak-31112.herokuapp.com/';

class Config {
	getBaseUrl() {
		let baseurl;
		return baseurl = 'http://192.168.43.4:3000/';
		// return baseurl = ip;
	}
	getMediaUrl() {
		let baseMediaUrl;
		return baseMediaUrl = ip + "/blogbing_4Mar/blogbing/uploads/";
		// return baseMediaUrl = ip;
	}
}
export default Config