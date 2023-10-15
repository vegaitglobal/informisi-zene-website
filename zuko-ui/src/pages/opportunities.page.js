import { useEffect, useState } from "react";
import OpportunitiesHero from "../components/OpportunitiesHero/OpportunitiesHero";
import { getPostByCategoryService, getPostsService } from "../services/posts.service";

export default function OpportunitiesPage() {
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [data, setData] = useState([])

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

    function onSelectChange(id) {
        if(id !== 0 && !id) return;

        setSelectedCategory(id);
    }

    function fetchPosts(id){
        if(id === '0' || !id) {
            return getPostsService().then(setData)
        }

        getPostByCategoryService({id}).then(setData)
        
    }

    useEffect(()=>{
        fetchPosts(selectedCategory);
    },[selectedCategory])

    return (
        <div>
            <OpportunitiesHero list={listOfPostCategories} onSelectChange={onSelectChange}/>
        </div>
    );
}