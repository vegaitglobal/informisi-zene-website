import { useEffect, useState } from 'react';
import { getNumberOfPostsService, getOpportunityByCategoryId } from '../services/posts.service';
import StrategyGoals from '../components/StrategyGoals/StrategyGoals';
import Stats from "../components/Stats/Stats";
import PostsContainer from "../components/PostsContainer/PostsContainer";
import QuickInformation from "../components/QuickInformation/QuickInformation";
import HeroBanner from '../components/HeroBanner/HeroBanner';
import RoundedButton from '../components/RoundedButton/RoundedButton';
import HorizontalSpacer from '../components/HorizontalSpacer/HorizontalSpacer';

export default function HomePage() {
	const [listOfPosts, setListOfPosts] = useState([]);

	useEffect(() => {
		getOpportunityByCategoryId(null,1,2)
			.then(({data}) => setListOfPosts([...data]))
			.catch((error) => console.error(error));
	}, []);

    return <div>
        <HeroBanner />
        <StrategyGoals />
		<PostsContainer data={listOfPosts} />
        <HorizontalSpacer desktopSize={60} mobileSize={30} />
        <RoundedButton
				label="Sve prilike za žene"
				isAnchor="true"
				navigateTo='/opportunities'
		/>
        <HorizontalSpacer desktopSize={180} mobileSize={90} />
        <Stats/>
        <QuickInformation />
    </div>
}
