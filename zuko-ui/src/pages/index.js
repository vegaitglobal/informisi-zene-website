import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import OurValues from "../components/OurValues/OurValues";
import TestComponent from "../components/TestComponent/TestComponent";

export default function HomePage() {
    return <div>
        <TestComponent testProperty="Example component"/>
        <LayoutWrapper children={<OurValues/>} />
    </div>
}