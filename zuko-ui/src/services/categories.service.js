import axios from 'axios'

const listOfPostCategories = [{"id":"1","name":"ANALIZA"},{"id":"2","name":"AKT"},{"id":"3","name":"IZVESTAJI"}];

export async function getCategoriesService() {
    const response = await axios
        .get(`${process.env.REACT_APP_ENDPOINT}categories`)
        .catch(error => console.error(error));

    return response.data;
}

export async function getPublicationCategoriesService()
{
    return new Promise(resolve=>resolve(listOfPostCategories));
}
