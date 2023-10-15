import { useEffect, useState } from "react";
import Stats from "../components/Stats/Stats";
import PostsContainer from "../components/PostsContainer/PostsContainer";
import QuickInformation from "../components/QuickInformation/QuickInformation";
import PostShareLinks from '../components/PostShareLinks/PostShareLinks';
import StrategyGoals from "../components/StrategyGoals/StrategyGoals";
import HeroBanner from '../components/HeroBanner/HeroBanner';
import { getNumberOfPostsService } from "../services/posts.service";

export default function HomePage() {
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(()=>{
        getNumberOfPostsService(2)
            .then(setListOfPosts)
            .catch(error => console.error(error));
    },[])

    return (
		<div>
			<HeroBanner />
			<StrategyGoals />
			<PostsContainer data={listOfPosts} />
			<Stats />
			<QuickInformation />
		</div>
	);
}