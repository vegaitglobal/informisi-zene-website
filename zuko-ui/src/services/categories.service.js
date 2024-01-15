import axios from 'axios'

const listOfPostCategories = [{"id":"ANALIZE","name":"Analize"},{"id":"SAOPSTENJA","name":"Saopštenja"},{"id":"IZVESTAJI","name":"Izveštaji"}];

export async function getCategoriesService() {
    const response = await axios
        .get(`${process.env.REACT_APP_ENDPOINT}categories?isOpportunity[eq]=1`)
        .catch(error => console.error(error));

    return response.data;
}

export async function getPublicationCategoriesService()
{
    return new Promise(resolve=>resolve(listOfPostCategories));
}
