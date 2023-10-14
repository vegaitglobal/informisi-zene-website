import { useEffect, useState } from 'react'
import SearchPostInput from '../components/SearchPostInput/SearchPostInput'
import getPostsService from '../services/posts.service'

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
    </div>
}