import React from "react";
import PostItem from "./postItem";





const getData = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10'
    ).then((res) => res.json())
};
function Posts() {
    const [posts, setPosts] = React.useState([]);

    const fetchAndUpdateData = async () => {
        try {
            const data = await getData();
            setPosts(data);
        }catch(error) {
            console.log(error);
        }
    };

return (
    <div>
        <button onClick={fetchAndUpdateData}>GET POST</button>
        <div>
            {
                posts.map((post) => ( 
                    <PostItem
                     key={post.id} 
                     body={post.body} 
                     title= {post.title} 
                    />
                ))
            }
        </div>
    </div>
)
}
export default Posts;