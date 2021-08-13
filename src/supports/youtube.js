import axios from 'axios';

// Google API Key (Created in the google-cloud "https://console.cloud.google.com/apis/credentials?project=api-projects-320618")
const KEY = 'AIzaSyAaScJub5-ih084ZqVhpqFrgSQrbFlFQF4'; 


// Axios Instance; Ref: https://github.com/axios/axios
const axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',   // Youtube API URL
    params: {
        key: KEY,
        part: 'snippet, statistics',
    }
});

export default axiosInstance;