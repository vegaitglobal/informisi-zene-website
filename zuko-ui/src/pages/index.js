import RoundedButton from "../components/RoundedButton/RoundedButton";
import HomePost from '../components/HomePost/HomePost';
import TestComponent from "../components/TestComponent/TestComponent";
import PostShareLinks from '../components/PostShareLinks/PostShareLinks';
import NewsPostsContainer from "../components/NewsPostsContainer/NewsPostsContainer";

export default function HomePage() {
    return <div>
        <TestComponent testProperty="Example component"/>
        <RoundedButton />
		<HomePost />
		<PostShareLinks />
		<NewsPostsContainer />
    </div>
}
