import { useEffect, useState } from 'react'
import SearchPostInput from '../components/SearchPostInput/SearchPostInput'
import {getPostsService} from '../services/posts.service'
import Pagination from '../components/Pagination/Pagination';

export default function NewsPage() {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    const handlePaginationClick = () => {
        if(currentPage === totalPages) return;
        setCurrentPage((prev) => prev + 1)
    }

    useEffect(()=>{
        getPostsService(currentPage).then(response => {
            const responseData = response.data;
            setTotalPages(response.meta.last_page)
            setData(prev => ([...prev, ...responseData]))
        })
    },[currentPage]);

    // Use this data
    console.log(data)

    return <div>
        <SearchPostInput />
        {data.map(item => (<div>{item.title}</div>))}
        {currentPage === totalPages ? <></> : <Pagination onClick={handlePaginationClick}/> }
        
    </div>
}