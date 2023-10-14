import AboutHero from '../components/AboutHero/AboutHero';
import AnnualReport from '../components/AnnualReport/AnnualReport';
import TeamMemberContainer from "../components/TeamMemberContainer/TeamMemberContainer";
import DonorsContainer from './../components/DonorsContainer/DonorsContainer';

export default function AboutPage() {
    return <div>
        <AboutHero />
        <TeamMemberContainer/>
        <AnnualReport/>
        <DonorsContainer/>
    </div>
}
