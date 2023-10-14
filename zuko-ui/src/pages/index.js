import TestComponent from "../components/TestComponent/TestComponent";
import SearchPostInput from "../components/SearchPostsInput/SearchPostInput";

export default function HomePage() {
    return <div>
        <TestComponent testProperty="Example component"/>
        <SearchPostInput />
    </div>
}