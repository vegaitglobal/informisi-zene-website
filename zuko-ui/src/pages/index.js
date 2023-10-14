import DonorsContainer from "../components/DonorsContainer/DonorsContainer";
import RoundedButton from "../components/RoundedButton/RoundedButton";
import TestComponent from "../components/TestComponent/TestComponent";

export default function HomePage() {
    return <div>
        <TestComponent testProperty="Example component"/>
        <RoundedButton />
        <DonorsContainer/>
    </div>
}