import axios from 'axios'

const config = {baseURL:''};
if(typeof window === 'undefined') {
//     说明是服务器端
    config.baseURL = "http://yuanjin.tech:5005/"
}else{
    //说明是客户端
    // config.baseURL = "http://yuanjin.tech:5005/"
}

const instance = axios.create(config)

export default instance;