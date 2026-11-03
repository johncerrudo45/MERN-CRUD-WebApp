import axios from "axios";

const http = axios.create({
    // this is the link from the books.routes.js used by the app
    baseURL: "http://localhost:8080/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

const getAll = async () => {
    return http.get("/books");
};

const create = (data) => {
    return http.post("/books", data);
};

export default {
    getAll,
    create,
};