import TestComponent from "../components/TestComponent/TestComponent";
import Header from "../components/Header/Header";

export default function HomePage() {
    return <div>
        <Header />
        <TestComponent testProperty="new text"/>
        <h1>Home Page</h1></div>
}