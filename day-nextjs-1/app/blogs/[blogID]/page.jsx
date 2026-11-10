
const Blogs1 = async ({ params }) => {
    const { blogID } = await params;

    return (
        <div>
            Blog 1 : {blogID}
        </div>
    );
};

export default Blogs1; 