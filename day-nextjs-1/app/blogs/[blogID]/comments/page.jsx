

const Blogs1 = async ({ params }) => {
    const paramsObj = await params;
    const { blogID } = paramsObj;
    return (
        <div>
            All Comments on <b>{blogID}</b> page
        </div>
    );
};

export default Blogs1;