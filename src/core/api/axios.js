import axios from "axios";

export const axiosInstances = {
    default: axios.create({
        baseURL: "http://localhost:3000",
    }),
};
