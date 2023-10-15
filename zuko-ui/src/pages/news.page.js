import PostsContainer from '../components/PostsContainer/PostsContainer'
import SearchPostInput from '../components/SearchPostInput/SearchPostInput'
import { useEffect, useState } from 'react'
import {getPostsService} from '../services/posts.service'

export default function NewsPage() {
    const [data, setData] = useState([])

    useEffect(()=>{
        getPostsService().then(response => {
            setData(response)
        })
    },[]);

    // Use this data
    console.log(data)

    return <div>
		<SearchPostInput />
		<PostsContainer displayVersion="v2" />
    </div>
}