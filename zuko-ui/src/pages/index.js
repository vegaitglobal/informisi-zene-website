import TestComponent from '../components/TestComponent/TestComponent';
import HomePost from '../components/HomePost/HomePost';

export default function HomePage() {
	return (
		<div>
			<TestComponent testProperty="Example component" />
			<HomePost />
		</div>
	);
}
