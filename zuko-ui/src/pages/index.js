import TestComponent from '../components/TestComponent/TestComponent';
import PostShareLinks from '../components/PostShareLinks/PostShareLinks';

export default function HomePage() {
	return (
		<div>
			<TestComponent testProperty="Example component" />
			<PostShareLinks />
		</div>
	);
}
