import Stats from "../components/Stats/Stats";
import PostShareLinks from '../components/PostShareLinks/PostShareLinks';
import HomePostsContainer from "../components/HomePostsContainer/HomePostsContainer";
import StrategyGoals from "../components/StrategyGoals/StrategyGoals";
import HeroBanner from '../components/HeroBanner/HeroBanner';
import HorizontalSpacer from "../components/HorizontalSpacer/HorizontalSpacer";

export default function HomePage() {
    return <div>
        <HeroBanner />
        <StrategyGoals />
		<HomePostsContainer />
        <HorizontalSpacer desktopSize={180} mobileSize={90} />
        <Stats/>
		<PostShareLinks />
    </div>
}