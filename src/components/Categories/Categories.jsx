import { useEffect, useState } from "react";
import Category from '../Category/Category';


const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, []);

    return (
        <div className="p-10">
            <br /><br />
            <div className="text-center">
                <h3 className="text-3xl font-bold">Job Category List</h3>
                <br />
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <br />
            <div className="grid md:grid-cols-4 gap-5">
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;