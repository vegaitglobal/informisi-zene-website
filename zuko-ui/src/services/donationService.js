import axios from 'axios';

export const getDonationInfo = async () => {
	try {
		const res = await axios
			.get(`${process.env.REACT_APP_ENDPOINT}donations/donation-info`)
			.catch((error) => console.error(error));
		
		const donationData = res.data;

		const [data] = donationData;
		console.log(data);
		const { account_number, recipient_name, default_amount, payment_code } = data;
		console.log('data :>> ', data);
		// R: should be changed dynamically
		const qrImage = await axios.post(
			'https://www.nbs.rs/QRcode/api/qr/v1/generate?lang=en',
			`K:PR|V:01|C:1|R:${account_number}|N:${recipient_name}|I:RSD${default_amount},00|SF:${payment_code}`,
			{
				headers: {
					'Content-Type': 'text/plain',
				},
			},
		);
		console.log(qrImage);
		return { donationData, qrImage };
	} catch (error) {
		console.log(error);
	}
};
