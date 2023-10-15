import axios from "axios";

export async function getEmployeesService() {
	const response = await axios
		.get(`${process.env.REACT_APP_ENDPOINT}employees`)
		.catch((error) => console.error(error));

	return response.data;
}