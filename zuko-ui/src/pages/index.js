import RoundedButton from "../components/RoundedButton/RoundedButton";
import HomePost from '../components/HomePost/HomePost';
import TestComponent from "../components/TestComponent/TestComponent";

export default function HomePage() {
    return <div>
        <TestComponent testProperty="Example component"/>
        <RoundedButton />
		<HomePost />
    </div>
}
