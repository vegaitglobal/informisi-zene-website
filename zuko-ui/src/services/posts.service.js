import axios from 'axios';

export async function getPostsService(pageNumber = 1) {
    const response = await axios
        .get(`${process.env.REACT_APP_ENDPOINT}posts?page=${pageNumber}&size=6`)
        .catch(error => console.error(error));

    return response?.data;
}

export async function getPostService({ id }) {
	const response = await axios
		.get(`${process.env.REACT_APP_ENDPOINT}posts/${id}`)
		.catch((error) => console.error(error));

	return response?.data;
}

export async function getByQueryService({query = '', pageNumber = 1}) {
    const response = await axios
        .get(`${process.env.REACT_APP_ENDPOINT}posts?title[like]=${query}&page=${pageNumber}&size=6`)
        .catch(error => console.error(error));

	return response?.data;
}

export async function getOpportunityByCategoryId(id, pageNumber) {
    var uri = `${process.env.REACT_APP_ENDPOINT}posts?page=${pageNumber}&is_opportunity=1&size=6`
    if(Number(id)) uri+=`&category=${id}`
    const response = await axios
        .get(uri)
        .catch(error => console.error(error));

    return response?.data;
}

export async function getNumberOfPostsService(number = 2) {
	const response = await axios
		.get(`${process.env.REACT_APP_ENDPOINT}posts?size=${number}`)
		.catch((error) => console.error(error));

	return response.data.data;
}
