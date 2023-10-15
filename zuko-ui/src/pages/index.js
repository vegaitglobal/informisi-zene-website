import { useEffect, useState } from "react";
import Stats from "../components/Stats/Stats";
import QuickInformation from "../components/QuickInformation/QuickInformation";
import HomePostsContainer from "../components/HomePostsContainer/HomePostsContainer";
import StrategyGoals from "../components/StrategyGoals/StrategyGoals";
import HeroBanner from '../components/HeroBanner/HeroBanner';
import HorizontalSpacer from "../components/HorizontalSpacer/HorizontalSpacer";
import { getNumberOfPostsService } from "../services/posts.service";

export default function HomePage() {
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(()=>{
        getNumberOfPostsService(2)
            .then(setListOfPosts)
            .catch(error => console.error(error));
    },[])

    return <div>
        <HeroBanner />
        <StrategyGoals />
        <HorizontalSpacer desktopSize={180} mobileSize={90} />
		<HomePostsContainer data={listOfPosts} />
        <Stats/>
        <QuickInformation />
    </div>
}