import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

import { getNumberOfPostsService, getPostService } from "../services/posts.service";
import PostContainer from "../components/PostContainer/PostContainer";

export default function PostPage() {
    const [recommendedPosts, setRecommendedPosts] = useState([]);
    const [data, setData] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        getPostService({id}).then(setData);
        getNumberOfPostsService(4).then((response) => {
            const responseData = response.filter(
                (item) => item.id !== Number(id)
            );
            setRecommendedPosts(responseData);
        });
    }, [id]);

    return <div>
        <PostContainer data={data} blogs={recommendedPosts}/>
    </div>
}