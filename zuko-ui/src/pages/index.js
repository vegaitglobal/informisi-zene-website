import TestComponent from "../components/TestComponent/TestComponent";
import DonationHero from "../components/DonationHero/DonationHero";

export default function HomePage() {
    return <div>
		<TestComponent testProperty="Example component" />
		<DonationHero />
    </div>
}