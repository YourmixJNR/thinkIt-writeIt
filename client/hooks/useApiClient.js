// useApiClient.js
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import { loadEnv } from "../env/loadEnv";
import { AuthContext } from "../context/auth/authContext";
import { useContext } from "react";
import { StorageServices } from "../libs/storage";

export const useApiClient = () => {
    const [csrfToken, setCsrfToken] = useState(null)

    const { dispatch } = useContext(AuthContext)

    const router = useRouter();
    const API_ENDPOINT = loadEnv.API_URL || process.env.NEXT_PUBLIC_API_URL;

    if (!API_ENDPOINT) {
        throw new Error(
            "Confirm 'NEXT_PUBLIC_API_URL' is set in the environment variables; create one if it's not there",
        );
    }

    const getCsrfToken = async () => {
        try {
            const { data } = await axios.get(`${API_ENDPOINT}/csrf-token`);
            setCsrfToken(data.csrfToken)
        } catch (error) {
            console.error("Error fetching CSRF token:", error);
        }
    };

    // useEffect(() => {
    //     getCsrfToken();
    // }, [csrfToken]);

    const apiClient = axios.create({
        baseURL: API_ENDPOINT,
        headers: {
            "Content-Type": "application/json",
            "_csrf": csrfToken
        }
    });

    apiClient.interceptors.response.use(function (response) {
        // Do something with response data
        return response;
    }, function (error) {
        // Do something with response error
        let res = error.response;
        // if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        //     return new Promise((resolve, reject) => {
        //         axios.get(`${API_ENDPOINT}/auth/logout`).then((data) => {
        //             console.log("/401 error > logout");
        //             dispatch({ type: "LOGOUT" })
        //             StorageServices.removeUser();
        //             StorageServices.removeAuth();
        //             router.push("/login");
        //             resolve(data);
        //         }).catch((err) => {
        //             console.log("AXIOS INTERCEPTORS ERR", err);
        //             reject(err);
        //         });
        //     });
        // }
        return Promise.reject(error);
    });

    return apiClient;
};
