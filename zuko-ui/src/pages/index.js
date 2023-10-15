import { useEffect, useState } from 'react';
import Stats from '../components/Stats/Stats';
import QuickInformation from '../components/QuickInformation/QuickInformation';
import HomePostsContainer from '../components/HomePostsContainer/HomePostsContainer';
import StrategyGoals from '../components/StrategyGoals/StrategyGoals';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import { getNumberOfPostsService } from '../services/posts.service';
import RoundedButton from '../components/RoundedButton/RoundedButton';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
	const [listOfPosts, setListOfPosts] = useState([]);

	useEffect(() => {
		getNumberOfPostsService(2)
			.then(setListOfPosts)
			.catch((error) => console.error(error));
	}, []);

	let navigate = useNavigate();
	const goToOpportunities = () => {
		let path = `/opportunities`;
		navigate(path);
	};

	return (
		<div>
			<HeroBanner />
			<StrategyGoals />
			<HomePostsContainer data={listOfPosts} />
			<RoundedButton
				label="Sve prilike za žene"
				onClick={goToOpportunities}
			/>
			<Stats />
			<QuickInformation />
		</div>
	);
}
