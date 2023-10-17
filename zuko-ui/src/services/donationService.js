import axios from "axios";

export const getDonationInfo = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_ENDPOINT}donations/donation-info`
    );
    const donationData = res.data;

    const [data] = donationData;
    console.log(data);
    const { account_number, recepient_name, default_amount, payment_code } =
      data;
    // R: should be changed dynamically
    const qrImage = await axios.post(
      "https://www.nbs.rs/QRcode/api/qr/v1/generate?lang=en",
      `K:PR|V:01|C:1|R:${account_number}|N:${recepient_name}|I:RSD${default_amount},00|SF:${payment_code}`,
      {
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
    return { donationData, qrImage };
  } catch (error) {
    console.log(error);
  }
};

export async function getDonationSites() {
  const response = await axios
    .get(`${process.env.REACT_APP_ENDPOINT}donations/donors`)
    .catch((err) => console.error(err));

  return response.data;
}
