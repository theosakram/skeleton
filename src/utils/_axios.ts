import axios from "axios";

export const _axios = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT,
    timeout: 5000,
    timeoutErrorMessage: "Jaringan Bermasalah",
});
