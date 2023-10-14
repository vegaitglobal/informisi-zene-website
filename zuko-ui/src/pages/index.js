import AboutHero from "../components/AboutHero/AboutHero";
import RoundedButton from "../components/RoundedButton/RoundedButton";
import TestComponent from "../components/TestComponent/TestComponent";

export default function HomePage() {
    return <div>
       
        <TestComponent testProperty="Example component"/>
        <AboutHero />
        <RoundedButton />
    </div>
}