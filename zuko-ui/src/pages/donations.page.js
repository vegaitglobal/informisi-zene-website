import QRCode from '../components/QRCode/QRCode';
import QRCodeOutroText from '../components/QRCodeOutroText/QRCodeOutroText';
import DonationHero from '../components/DonationHero/DonationHero';

export default function DonationsPage() {
	return (
		<div>
			<DonationHero />
			<QRCode />
			<QRCodeOutroText />
		</div>
	);
}
