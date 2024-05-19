import axios from 'axios';
import { getSession } from 'next-auth/react';

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL;

if (!API_ENDPOINT) {
    throw new Error(
        "Confirm 'NEXT_PUBLIC_API_URL' is set in the environment variables; create one if it's not there",
    );
}

// Create an Axios instance
const apiClient = axios.create({
    withCredentials: true,
    baseURL: API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Use an async function to handle the session and token
const attachTokenToRequest = async (request) => {
    const session = await getSession();
    if (session && session.accessToken) {
        request.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return request;
};

// Add an interceptor to attach the token to requests
apiClient.interceptors.request.use(attachTokenToRequest);

export default apiClient;
