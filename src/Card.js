import React, {useState, useEffect, useRef} from 'react'
import getPost from './helpers/getPost'

const Card = () => {
    const [post, setPost] = useState({ title: "POST" });
    const [loading, setLoading] = useState(false);
    const isMountedRef = useRef(true);

    useEffect( () => {
       updatePost();
       return () => {
           isMountedRef.current = false;
       }
    }, [] );

     const updatePost = () => {
         setLoading(true);
          getPost().then((newPost) => {

            setTimeout(() => {

                if(isMountedRef.current){
                    setPost(newPost);
                    setLoading(false);
                }

            }, 2000);

          });
     }
    
     if(loading) return <h1>Loading......</h1>

    return (
        <div>
            <h1>{post.title}</h1>
            
        </div>
    )
}

export default Card
