import axios from 'axios'

export default async function getPostsService() {
    const response = await axios
        .get(`${process.env.REACT_APP_ENDPOINT}posts`)
        .catch(error => console.error(error));

    return response.data.data;
}