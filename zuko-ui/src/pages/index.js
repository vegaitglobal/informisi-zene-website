import TestComponent from "../components/TestComponent/TestComponent";
import PostShareLinks from '../components/PostShareLinks/PostShareLinks';
import HomePostsContainer from "../components/HomePostsContainer/HomePostsContainer";
import StrategyGoals from "../components/StrategyGoals/StrategyGoals";
import HeroBanner from '../components/HeroBanner/HeroBanner';

export default function HomePage() {
    return <div>
        <HeroBanner />
        <StrategyGoals />
		<HomePostsContainer />
		<PostShareLinks />
    </div>
}
