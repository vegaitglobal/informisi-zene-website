import AboutHero from '../components/AboutHero/AboutHero';
import TeamMemberContainer from "../components/TeamMemberContainer/TeamMemberContainer";
import DonorsContainer from './../components/DonorsContainer/DonorsContainer';

export default function AboutPage() {
    return <div>
        <AboutHero />
        <TeamMemberContainer/>
        <DonorsContainer/>
    </div>
}
