// useApiClient.js
import axios from "axios";
import { useRouter } from 'next/router';
import { loadEnv } from "../env/loadEnv";
import { AuthContext } from "../context/auth/authContext";
import { useContext } from "react";
import { StorageServices } from "../libs/storage";

export const useApiClient = () => {

    const { dispatch } = useContext(AuthContext)

    const router = useRouter();
    const API_ENDPOINT = loadEnv.API_URL || process.env.NEXT_PUBLIC_API_URL;

    if (!API_ENDPOINT) {
        throw new Error(
            "Confirm 'NEXT_PUBLIC_API_URL' is set in the environment variables; create one if it's not there",
        );
    }

    const apiClient = axios.create({
        baseURL: API_ENDPOINT,
        headers: {
            "Content-Type": "application/json"
        }
    });

    apiClient.interceptors.response.use(function (response) {
        // Do something with response data
        return response;
    }, function (error) {
        // Do something with response error
        let res = error.response;
        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
            return new Promise((resolve, reject) => {
                axios.get(`${API_ENDPOINT}/auth/logout`).then((data) => {
                    console.log("/401 error > logout");
                    dispatch({ type: "LOGOUT" })
                    StorageServices.removeUser();
                    StorageServices.removeAuth();
                    router.push("/login");
                    resolve(data);
                }).catch((err) => {
                    console.log("AXIOS INTERCEPTORS ERR", err);
                    reject(err);
                });
            });
        }
        return Promise.reject(error);
    });

    return apiClient;
};
