import axios from 'axios'

export const getDonationInfo = async () => {
    try {
        const res = await axios.get('https://144251f0-e5d6-4abf-90cc-a4878ba392b0.mock.pstmn.io/api/1/donation-infos');
        const donationData = res.data;
        
        const [data] = donationData;
        console.log(data)
        const {account_number, recepient_name, default_amount, payment_code} = data;
        // R: should be changed dynamically
        const qrImage = await axios.post('https://www.nbs.rs/QRcode/api/qr/v1/generate?lang=en',`K:PR|V:01|C:1|R:160000000039175078|N:${recepient_name}|I:RSD2424,00|SF:${payment_code}`,
          {
            headers: {
              'Content-Type': 'text/plain'
            }
          }
        );
        console.log(qrImage)
        return {donationData, qrImage}
      } catch (error) {
        console.log(error);
      }
}