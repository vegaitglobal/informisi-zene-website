import Stats from "../components/Stats/Stats";
import TestComponent from "../components/TestComponent/TestComponent";

export default function HomePage() {
    return <div>
        <TestComponent testProperty="Example component"/>
        <Stats/>
    </div>
}