import { useEffect, useState } from 'react';
import { getByQueryService } from '../services/posts.service';
import PostsContainer from '../components/PostsContainer/PostsContainer';
import SearchPostInput from '../components/SearchPostInput/SearchPostInput';
import GeneralHeading from '../components/GeneralHeading/GeneralHeading';
import HorizontalSpacer from '../components/HorizontalSpacer/HorizontalSpacer';

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
			<HorizontalSpacer desktopSize={120} mobileSize={60} />
		</div>
	);
}
