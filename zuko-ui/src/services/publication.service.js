import axios from 'axios'

export async function getPublicationService({id = 0}) {
    const response = await axios
        .get(`${process.env.REACT_APP_ENDPOINT}publications/${id}`)
        .catch(error => console.error(error));

    return response.data;
}

export async function getPublicationByCategoryService({id = 0}) {
    const response = await axios
        .get(`${process.env.REACT_APP_ENDPOINT}publications?type=${id}`)
        .catch(error => console.error(error));

    return response.data.data;
}