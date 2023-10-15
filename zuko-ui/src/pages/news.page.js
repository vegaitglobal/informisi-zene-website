import { useEffect, useState } from 'react';
import { getPostsService, getByQueryService } from '../services/posts.service';
import PostsContainer from '../components/PostsContainer/PostsContainer';
import SearchPostInput from '../components/SearchPostInput/SearchPostInput';

export default function NewsPage() {
	const [query, setQuery] = useState('');
	const [searchedData, setSearchedData] = useState([]);

	useEffect(() => {
        getByQueryService({query}).then(setSearchedData);
	}, [query]);

	return (
		<div>
			<SearchPostInput setQuery={setQuery} />
			<PostsContainer displayVersion="v2" data={searchedData.data} />
		</div>
	);
}
