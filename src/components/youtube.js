import axios from "axios";

const api_key = "AIzaSyDUqBQzPxOekPMYCIHLc0neYuTO_EYDocA";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        maxResults: 1,
        key: api_key

    }

});

// const api_keys_search = [
//     "AIzaSyBNSxn4CKu0GlzCGtE1rgfY6HZhHjV-JrY",
//     "AIzaSyBOQdwq8m8PUvoTb6cEqapH9DI3qB_X03s",
//     "AIzaSyB-NQJK585zNgPDE1j2BQ0N-hLwrDoPAao",
//     "AIzaSyCCc1VbCM4-ucsCWonlSBKwdXS4HXOjr2w",
//     "AIzaSyBX153zsABken9JGk8dgtUYW7rZcvkL0s0"
// ];

// const api_key_data = [
//     "AIzaSyChL1qNDSshayIOaYFvj8fMKX1dFxywO4g",
//     "AIzaSyDUqBQzPxOekPMYCIHLc0neYuTO_EYDocA",
//     "AIzaSyAHyNaUGxEh1ZIG9Dvw5Piz_kjgiDG6PW8",
//     "AIzaSyDdyuO-_hiUWCDAhH9k9v_tlITJ4dcdSJI",
//     "AIzaSyC_-EEaebYhHTkoXk_3CWOsXtgtAaYYYqg",
//     "AIzaSyB24bOYFzeVP4R6nzLzRUKi0ZymuIGOnQY",
//     "AIzaSyD3pWMHNEzewQBNgT8rANzTOzQx_N_mIO8",
// ];