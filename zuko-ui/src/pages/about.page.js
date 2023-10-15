import AboutHero from '../components/AboutHero/AboutHero';
import AnnualReport from '../components/AnnualReport/AnnualReport';
import TeamMemberContainer from '../components/TeamMemberContainer/TeamMemberContainer';
import DonorsContainer from './../components/DonorsContainer/DonorsContainer';
import OurValues from './../components/OurValues/OurValues';
import { getDonationSites } from '../services/donationService';
import { useEffect, useState } from 'react';

export default function AboutPage() {
	const [data, setData] = useState([]);

	useEffect(() => {
		getDonationSites().then(setData);
	}, [])

	return (
		<div>
			<AboutHero />
			<OurValues />
			<TeamMemberContainer />
			<AnnualReport />
			<DonorsContainer data={data} />
		</div>
	);
}
