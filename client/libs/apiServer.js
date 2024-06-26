import axios from 'axios';

const API_ENDPOINT = process.env.SERVER_API_URL || ""

if (!API_ENDPOINT) {
    throw new Error(
        "Confirm 'SERVER_API_URL' is set in the environment variables; create one if it's not there",
    );
}

const apiServer = axios.create({
    withCredentials: true,
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiServer;
