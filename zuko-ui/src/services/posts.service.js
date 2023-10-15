import axios from 'axios';

export async function getPostsService() {
	const response = await axios
		.get(`${process.env.REACT_APP_ENDPOINT}posts`)
		.catch((error) => console.error(error));

	return response.data.data;
}

export async function getPostService({ id }) {
	const response = await axios
		.get(`${process.env.REACT_APP_ENDPOINT}posts/${id}`)
		.catch((error) => console.error(error));

	return response.data;
}

export async function getByQueryService({ query = '' }) {
	const response = await axios
		.get(`${process.env.REACT_APP_ENDPOINT}posts?title[like]=${query}`)
		.catch((error) => console.error(error));

	return response.data;
}

export async function getPostByCategoryService({ id = 0 }) {
	const response = await axios
		.get(`${process.env.REACT_APP_ENDPOINT}posts?category=${id}`)
		.catch((error) => console.error(error));

	return response.data.data;
}

export async function getNumberOfPostsService(number = 2) {
	const response = await axios
		.get(`${process.env.REACT_APP_ENDPOINT}posts?size=${number}`)
		.catch((error) => console.error(error));

	return response.data.data;
}
