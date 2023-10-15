import { useEffect, useState } from "react";
import OpportunitiesHero from "../components/OpportunitiesHero/OpportunitiesHero";
import { getPostByCategoryService, getPostsService } from "../services/posts.service";
import Pagination from "../components/Pagination/Pagination";

export default function OpportunitiesPage() {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    const listOfPostCategories = [
        {
            "id": 1,
            "name": "KOJI JE MOJ DEO?"
        },
        {
            "id": 2,
            "name": "ANALIZA"
        },
        {
            "id": 3,
            "name": "ACT"
        }
    ];

    const handlePaginationClick = () => {
        if(currentPage === totalPages) return;
        setCurrentPage((prev) => prev + 1)
    }

    function onSelectChange(id) {
        if(id !== 0 && !id) return;

        setSelectedCategory(id);
    }

    function fetchPosts(id){

        if(id === '0' || !id) {
            return getPostsService(currentPage).then(response => {
                const responseData = response.data;
                setTotalPages(response.meta.last_page)
                setData(prev => ([...prev, ...responseData]))
            })
        }

        getPostByCategoryService({id, currentPage}).then(response => 
            {
                const responseData = response.data;
                setTotalPages(response.meta.last_page)
                setData(prev => ([...prev, ...responseData]))    
            }
        )
        
    }

    useEffect(()=>{
        fetchPosts(selectedCategory);
    },[selectedCategory, currentPage]);

    console.log(data)
    return (
        <div>
            <OpportunitiesHero list={listOfPostCategories} onSelectChange={onSelectChange}/>
            {data.map(item => (<div>{item.title}</div>))}
            {currentPage === totalPages ? <></> : <Pagination onClick={handlePaginationClick}/> }
        </div>
    );
}