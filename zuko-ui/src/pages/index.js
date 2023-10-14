import Stats from "../components/Stats/Stats";
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
        <QuickInformation />
    </div>
}