import axios from 'axios'
import React from 'react'
import Post from './Post'

import "@/app/_styles/feedcontainer.css"

const Feed = ({isRecordCreated}) => {

    const [posts, setPosts] = React.useState()

    const fetchData = async() => {

        try {
            
            const result = await axios.get('/api/post')
            const data = result.data.posts

            setPosts(data)
            
        } catch (error) {
            console.log(error);
        }

    }

    React.useEffect(() => {
        
        fetchData()
        
    },[isRecordCreated])

    return (
        <div className="feed_container">
            {posts?.map((post) => {
              
                return (
                    <div key={post._id}>
                        <Post post={post}/>
                    </div>
                )
                  
            })}
        </div>
    )

}

export default Feed