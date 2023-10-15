import { useEffect, useState } from 'react';
import { getByQueryService, getPostsService } from '../services/posts.service';
import PostsContainer from '../components/PostsContainer/PostsContainer';
import SearchPostInput from '../components/SearchPostInput/SearchPostInput';
import Pagination from '../components/Pagination/Pagination';

export default function NewsPage() {
	const [query, setQuery] = useState('');
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    const handlePaginationClick = () => {
        if(currentPage === totalPages) return;
        setCurrentPage((prev) => prev + 1)
    }

    useEffect(() => {
        getByQueryService({query}).then(response => {
            setTotalPages(response.meta.last_page);
            setData(response)
        });
	}, [query]);

    useEffect(()=>{
        if(!data?.data) return; 
        
        getByQueryService({query, pageNumber: currentPage}).then(response => {
            const responseData = response;
            setTotalPages(responseData.meta.last_page);
            setData(prev => {
                return {
                    ...prev,
                    data: [...prev.data, ...responseData.data]
                }
            });
        })
    },[currentPage]);


	return (
		<div>
			<SearchPostInput setQuery={setQuery} />
			<PostsContainer displayVersion="v2" data={data.data} />
            {currentPage === totalPages ? <></> : <Pagination onClick={handlePaginationClick}/> }
		</div>
	);
}
