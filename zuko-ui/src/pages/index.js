import TestComponent from "../components/TestComponent/TestComponent";
import PostShareLinks from '../components/PostShareLinks/PostShareLinks';
import HomePostsContainer from "../components/HomePostsContainer/HomePostsContainer";

export default function HomePage() {
    return <div>
        <TestComponent testProperty="Example component"/>
		<HomePostsContainer />
		<PostShareLinks />
    </div>
}
