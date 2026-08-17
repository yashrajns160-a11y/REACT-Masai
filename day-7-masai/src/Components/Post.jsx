import React from "react";
import PostItem from "./PostItem";

// 'https://jsonplaceholder.typicode.com/posts?_limit=5'

const getData = (page) => {
    return fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
    ).then((res) => res.json());
};
function Post() {
    const [loading, setLoading] = React.useState(false);
    const [posts, setPosts] = React.useState([]);
    const [page, setPage] = React.useState(1);

    React.useEffect( ()=> {  //use effect update kar raha
        fetchAndUpdateData(page);
    },[page]) // on load it will show


    const fetchAndUpdateData = async (page =1) => {
        try {
            setLoading(true);
            const data = await getData(page);
            setPosts(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }


    if(loading) {
        return <h1>Loading...</h1>
    }
    const handlePageChange = (val) =>{
        const value = val + page;
        setPage(value);
        // fetchAndUpdateData(value);
    }

    return (
        <div>
            {/* <button onClick={fetchAndUpdateData}>GET POST</button> */}
            <div>
                {
                    posts.map((post) => (  //implicit return
                        <PostItem
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    ))
                }
            </div>
            <div>
                <button onClick={() => handlePageChange(-1)}>PREV</button>
                <button disabled>{page}</button>
                <button onClick={() => handlePageChange(+1)}>NEXT</button>

            </div>
        </div>
    )

}

export default Post;