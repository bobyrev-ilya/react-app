import axios from "axios";

/**
 * Тут может быть запрос к сервису по получению карт
 */
export const getCards = () => {
    return axios
        .get("http://localhost:3000");
}