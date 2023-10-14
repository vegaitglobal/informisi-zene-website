import HomePostsContainer from '../components/HomePostsContainer/HomePostsContainer'
import SearchPostInput from '../components/SearchPostInput/SearchPostInput'

export default function NewsPage() {
    return <div>
		<SearchPostInput />
		<HomePostsContainer displayVersion="v2" />
    </div>
}