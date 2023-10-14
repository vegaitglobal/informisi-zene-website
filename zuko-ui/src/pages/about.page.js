import AboutHero from '../components/AboutHero/AboutHero';
import AnnualReport from '../components/AnnualReport/AnnualReport';
import TeamMemberContainer from "../components/TeamMemberContainer/TeamMemberContainer";
import DonorsContainer from './../components/DonorsContainer/DonorsContainer';
import OurValues from './../components/OurValues/OurValues';

export default function AboutPage() {
    return <div>
        <AboutHero />
        <OurValues/>
        <TeamMemberContainer/>
        <AnnualReport/>
        <DonorsContainer/>
    </div>
}
