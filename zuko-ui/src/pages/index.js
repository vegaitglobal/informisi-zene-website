import TestComponent from '../components/TestComponent/TestComponent';
import PostShareLinks from '../components/PostShareLinks/PostShareLinks';

export default function HomePage() {
	return (
		<div>
			<TestComponent testProperty="new text" />
			<h1>Home Page</h1>
			<PostShareLinks />
		</div>
	);
}
