import axios from 'axios'

export async function getPostsService() {
    const response = await axios
        .get(`${process.env.REACT_APP_ENDPOINT}posts`)
        .catch(error => console.error(error));

    return response.data.data;
}

export async function getNumberOfPostsService(number = 2) {
    const response = await axios
        .get(`${process.env.REACT_APP_ENDPOINT}posts?size=${number}`)
        .catch(error => console.error(error));

    return response.data.data;
}