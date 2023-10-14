import TestComponent from "../components/TestComponent/TestComponent";
import PostShareLinks from '../components/PostShareLinks/PostShareLinks';
import HomePostsContainer from "../components/HomePostsContainer/HomePostsContainer";
import StrategyGoals from "../components/StrategyGoals/StrategyGoals"

export default function HomePage() {
    return <div>
        <TestComponent testProperty="Example component"/>
        <StrategyGoals />
		<HomePostsContainer />
		<PostShareLinks />
    </div>
}
