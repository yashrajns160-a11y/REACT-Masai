
const PostItem = ({id, title , body})=> {
    return (
        <div style={{
            border :"1 px solid",
            padding : "10px",
            margin : "10px",
        }}>
            <h3>
                {id}{"------"}
                {title}
            </h3>
            <p>{body}</p>
        </div>
    );
}

export default PostItem;