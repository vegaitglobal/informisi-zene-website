import { useEffect, useState } from 'react';
import { getByQueryService } from '../services/posts.service';
import PostsContainer from '../components/PostsContainer/PostsContainer';
import SearchPostInput from '../components/SearchPostInput/SearchPostInput';

export default function NewsPage() {
	const [query, setQuery] = useState('');
	const [searchedData, setSearchedData] = useState([]);
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    const handlePaginationClick = () => {
        if(currentPage === totalPages) return;
        setCurrentPage((prev) => prev + 1)
    }

    useEffect(() => {
        getByQueryService({query}).then(setSearchedData);
	}, [query]);

    useEffect(()=>{
        getPostsService(currentPage).then(response => {
            const responseData = response.data;
            setTotalPages(response.meta.last_page)
            setData(prev => ([...prev, ...responseData]))
        })
    },[currentPage]);

    console.log(data)

	return (
		<div>
			<SearchPostInput setQuery={setQuery} />
            {data.map(item => (<div>{item.title}</div>))}
			<PostsContainer displayVersion="v2" data={searchedData.data} />
            {currentPage === totalPages ? <></> : <Pagination onClick={handlePaginationClick}/> }
		</div>
	);
}
