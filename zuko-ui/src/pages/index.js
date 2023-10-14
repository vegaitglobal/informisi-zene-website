import TestComponent from "../components/TestComponent/TestComponent";
import SearchPostInput from "../components/SearchPostsInput/SearchPostInput";

export default function HomePage() {
    return <div>
        <TestComponent testProperty="new text"/>
        <h1>Home Page</h1>
        <SearchPostInput/>
        </div>
}