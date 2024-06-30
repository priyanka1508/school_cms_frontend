import axios from "axios";
import { baseURL, imageRoutes } from "../routes/eventImagesRoutes";

export const getImagesService = (query) => {
    return axios({
        method: "get",
        url: `${baseURL}/${imageRoutes.imageApiEndpoint}/`,
        params: query,
        headers: {
            "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
        responseType: 'json'
    });
}