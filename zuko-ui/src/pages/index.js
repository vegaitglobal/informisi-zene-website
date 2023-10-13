import HomePost from '../components/HomePost/HomePost';
import TestComponent from '../components/TestComponent/TestComponent';

export default function HomePage() {
	return (
		<div>
			<TestComponent testProperty="new text" />
			<h1>Home Page</h1>
			<HomePost />
		</div>
	);
}
