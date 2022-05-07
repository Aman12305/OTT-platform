import axios from "axios";

const api_key = "AIzaSyB-NQJK585zNgPDE1j2BQ0N-hLwrDoPAao";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 1,
        key: api_key
    }

});