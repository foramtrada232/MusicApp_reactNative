import Config from '../config';
import axios from 'axios';
const config = new Config();
import RNFetchBlob from 'react-native-fetch-blob';

export default {

    /**
     * @param {object} payload
     * Register User
     */
    madeVideo: (payload) => {
        console.log("PAYLOAD:", payload);
        // var bodyFormData = new FormData();
        // bodyFormData.set('userName', 'Foram');
        // bodyFormData.append('image', payload); 
        // var formData = new FormData();
        //     formData.append('file',payload);
        //     formData.append('upload_preset','abcde');
        //     return axios({
        //         url:'http://192.168.43.4:3000/made-video',
        //         method:'POST',
        //         headers:{
        //           'Content-Type':'application/x-www-form-urlencoded'
        //         },
        //         data:formData
        //     })
        //     // axios({
        //     //     method: 'post',
        //     //     url: 'http://192.168.43.4:3000/made-video',
        //     //     data: bodyFormData,
        //     //     headers: {'Content-Type': 'multipart/form-data' }
        //     //     })
        //     .then(response => {
        //         console.log("RESPONSE:",response)
        //         return response
        //     })
        //     .catch({ status: 500, message: 'Internal Serevr Error' });
            // axios.post('http://192.168.43.4:3000/made-video',payload)
        // const cleanFilePath = file.replace('file://', '');
        RNFetchBlob.fetch('POST', 'http://192.168.43.4:3000/made-video', {
            'Content-Type': 'multipart/form-data',
        },
            [
                {
                    name: 'images',
                    filename: payload,
                    // data: RNFetchBlob.wrap(cleanFilePath)
                },
            ]).
            then(response => {
                console.log("RESPONSE:", response)
                return response
            })
            .catch({ status: 500, message: 'Internal Serevr Error' });
    },
}