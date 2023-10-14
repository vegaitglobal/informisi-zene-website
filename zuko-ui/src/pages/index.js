import Stats from "../components/Stats/Stats";
import QuickInformation from "../components/QuickInformation/QuickInformation";
import PostsContainer from "../components/PostsContainer/PostsContainer";
import StrategyGoals from "../components/StrategyGoals/StrategyGoals";
import HeroBanner from '../components/HeroBanner/HeroBanner';

export default function HomePage() {
    return <div>
        <HeroBanner />
        <StrategyGoals />
		<PostsContainer />
        <Stats/>
        <QuickInformation />
    </div>
}