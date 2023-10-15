import { useEffect, useState } from 'react';
import Article from '../components/Article/Article';

import { useParams } from "react-router-dom";
import { getPostService } from '../services/posts.service';

export default function PostPage() {
    const [data, setData] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        getPostService({id}).then(setData)
    },[])

    return <div>
        <Article data={data}/>
    </div>
}