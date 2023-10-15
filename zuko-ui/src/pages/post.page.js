import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Article from '../components/Article/Article'
import { getNumberOfPostsService, getPostService } from "../services/posts.service";
import BlogRecommendationContainer from './../components/BlogRecommendationContainer/BlogRecommendationContainer';

export default function PostPage() {
    const [recommendedPosts, setRecommendedPosts] = useState([]);
    const [data, setData] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        getPostService({id}).then(setData);

        getNumberOfPostsService(2)
            .then(setRecommendedPosts);
    },[])

    return <div>
        <Article data={data}/>
        <BlogRecommendationContainer blogs={recommendedPosts}/>
    </div>
}