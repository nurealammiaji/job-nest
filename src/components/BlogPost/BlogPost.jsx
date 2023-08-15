

const BlogPost = ({post}) => {

    const {title, author, date, content} = post;

    return (
        <div className="p-5 border rounded-md bg-blue-50">
            <h3 className="text-xl font-semibold">{title}</h3>
            <br />
            <hr />
            <br />
            <p>{content}</p>
        </div>
    );
};

export default BlogPost;