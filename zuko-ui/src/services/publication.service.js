import axios from 'axios'

export async function getPublicationsService() {
    const response = await axios
        .get(`${process.env.REACT_APP_ENDPOINT}publications`)
        .catch(error => console.error(error));

    return response.data;
}

export async function getPublicationByCategoryService({id = 1}) {
    const response = await axios
        .get(`${process.env.REACT_APP_ENDPOINT}publications?type=${id}`)
        .catch(error => console.error(error));

    return response.data.data;
}