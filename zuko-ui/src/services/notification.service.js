import axios from "axios";

export async function sendEmailNotification(formData) {
	const response = await axios
		.post(`${process.env.REACT_APP_ENDPOINT}notifications/email`, formData)
		.catch((error) => console.error(error));
	return response.data;
}

export async function subscribeToNewsletter(email) {
	const response = await axios
		.post(`${process.env.REACT_APP_ENDPOINT}notifications/newsletters/subscriptions`, {"email":email})
		.catch((error) => console.error(error));
	return response.data;
}