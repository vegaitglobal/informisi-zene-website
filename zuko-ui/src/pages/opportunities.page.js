import { useEffect, useState } from "react";
import {getCategoriesService} from '../services/categories.service';
import { getPostsByCategory } from "../services/posts.service";

export default function OpportunitiesPage() {
    const [listOfCategories, setListOfCategories] = useState([]);
    const [listOfPosts, setListOfPosts] = useState([]);
    useEffect(()=>{
        getCategoriesService()
            .then(setListOfCategories)
            .catch(error => console.error(error));
    },[])
    /* 
        This is how to get post by category when selected
        getPostsByCategory(categoryId)
            .then(setListOfPosts)
            .catch(error => console.error(error));
    */
    return <div>
        Prilike za zene
    </div>
}