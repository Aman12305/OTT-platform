import axios from "axios";

const api_key = process.env.REACT_APP_GOOGLE;


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        maxResults: 1,
        key: api_key

    }

});
