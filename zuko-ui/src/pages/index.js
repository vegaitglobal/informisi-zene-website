import Stats from "../components/Stats/Stats";
import PostShareLinks from '../components/PostShareLinks/PostShareLinks';
import QuickInformation from "../components/QuickInformation/QuickInformation";
import HomePostsContainer from "../components/HomePostsContainer/HomePostsContainer";
import StrategyGoals from "../components/StrategyGoals/StrategyGoals";
import HeroBanner from '../components/HeroBanner/HeroBanner';

export default function HomePage() {
    return <div>
        <HeroBanner />
        <StrategyGoals />
		<HomePostsContainer />
        <Stats/>
		<PostShareLinks />
        <QuickInformation />
    </div>
}