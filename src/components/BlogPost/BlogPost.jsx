import { UserIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';

const BlogPost = ({post}) => {

    const {title, author, date, content} = post;

    return (
        <div className="p-5 border border-blue-500 rounded-md bg-blue-50">
            <h3 className="text-xl font-semibold">{title}</h3>
            <br />
            <div className="items-center justify-start gap-5 text-gray-400 md:flex">
            <UserIcon className="w-5 h-5" /><small><span className='mr-1 font-semibold'>Author:</span> {author}</small><CalendarDaysIcon className="w-5 h-5" /><small className="mt-1 md:mt-0"><span className='mr-1 font-semibold'>Published:</span> {date}</small>
            </div>
            <br />
            <hr />
            <br />
            <p className="md:text-justify">{content}</p>
        </div>
    );
};

export default BlogPost;