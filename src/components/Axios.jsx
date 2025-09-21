import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/'
const AxiosInstance = axios.create({
    baseURL : baseUrl,
    timeout  : 5000,//Any HTTP request made with AxiosInstance will wait a maximum of 5 seconds (5000 milliseconds) for a response from the server.
    headers : {//tell about data format
        "Content-Type" : "application/json",//sending data will be json format
        accept : "application/json"//reciving data also json format
    }
})

export default AxiosInstance