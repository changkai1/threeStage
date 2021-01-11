import axios from "axios";
axios.interceptors.request.use((config)=>{
    config.url="http://127.0.0.1"+config.url;
    return config;
})
axios.interceptors.response.use(({data})=>{
    return data;
})
