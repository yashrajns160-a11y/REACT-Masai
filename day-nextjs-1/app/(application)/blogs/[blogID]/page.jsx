import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { blogID } = await params;

    return {
        title: `Blog ${blogID}`,
        description: `Read blog number ${blogID}`,
    };
}

const Blogs1 = async ({ params }) => {
    const { blogID } = await params;

    if(!/^\d+$/.test(blogID)){
        notFound();
    }
    return (
        <div>
            Blog 1 : {blogID}
        </div>
    );
};

export default Blogs1; 
