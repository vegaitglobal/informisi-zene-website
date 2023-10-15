import Stats from "../components/Stats/Stats";
import PostShareLinks from '../components/PostShareLinks/PostShareLinks';
import PostsContainer from "../components/PostsContainer/PostsContainer";
import StrategyGoals from "../components/StrategyGoals/StrategyGoals";
import HeroBanner from '../components/HeroBanner/HeroBanner';

export default function HomePage() {
    return <div>
        <HeroBanner />
        <StrategyGoals />
		<PostsContainer />
        <Stats/>
		<PostShareLinks />
    </div>
}