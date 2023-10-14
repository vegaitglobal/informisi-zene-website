import RoundedButton from "../components/RoundedButton/RoundedButton";
import TestComponent from "../components/TestComponent/TestComponent";
import Header from "../components/Header/Header";

export default function HomePage() {
    return <div>
        <Header />
        <TestComponent testProperty="Example component"/>
        <RoundedButton />
    </div>
}