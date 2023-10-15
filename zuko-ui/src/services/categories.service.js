import axios from 'axios'


export async function getCategoriesService() {
    const response = await axios
        .get(`${process.env.REACT_APP_ENDPOINT}categories`)
        .catch(error => console.error(error));

    return response.data;
}
