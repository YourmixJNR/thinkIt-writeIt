// useApiClient.js
import axios from "axios";
import { useRouter } from 'next/router';
import { loadEnv } from "../env/loadEnv";
import { StorageServices } from "../libs/storage";

export const useApiClient = () => {

    const router = useRouter();

    const API_ENDPOINT = loadEnv.API_URL || process.env.NEXT_PUBLIC_API_URL;

    if (!API_ENDPOINT) {
        throw new Error(
            "Confirm 'NEXT_PUBLIC_API_URL' is set in the environment variables; create one if it's not there",
        );
    }

    const apiClient = axios.create({
        withCredentials: true,
        baseURL: API_ENDPOINT,
        headers: {
            "Content-Type": "application/json",
        }
    });



    return apiClient;
};
