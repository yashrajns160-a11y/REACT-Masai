
const Comments = async ({ params }) => {
    const paramsObj = await params;
    const { blogID, commentID } = paramsObj;

    return (
        <div>
            Comment No. <b>{commentID}</b> on <b>{blogID}</b> page
        </div>
    )
}

export default Comments;