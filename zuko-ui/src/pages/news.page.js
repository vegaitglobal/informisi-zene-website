import PostsContainer from '../components/PostsContainer/PostsContainer'
import SearchPostInput from '../components/SearchPostInput/SearchPostInput'

export default function NewsPage() {
    return <div>
		<SearchPostInput />
		<PostsContainer displayVersion="v2" />
    </div>
}