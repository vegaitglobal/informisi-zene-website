import React, {useEffect, useState} from "react";
import Article from '../components/Article/Article'
import { getNumberOfPostsService } from "../services/posts.service";
import BlogRecommendationContainer from './../components/BlogRecommendationContainer/BlogRecommendationContainer';

export default function PostPage() {
    const [recommendedPosts, setRecommendedPosts] = useState([]);

    useEffect(()=>{
        getNumberOfPostsService(2)
            .then(setRecommendedPosts);
    },[])

    return <div>
        <Article />
        <BlogRecommendationContainer blogs={recommendedPosts}/>
    </div>
}