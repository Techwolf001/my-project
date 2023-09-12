import { useState } from "react";
import BlogList from "./BlogList";


/*const Home = () => {
    //let name = 'Fawas';
    const [name, setName] = useState('Fazboy')
    const [age, setAge] = useState(18)
    const handleClick = () => {
        setName('Fawas')
        setAge(17)
    }

    return(
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={
                handleClick
            }>Click me</button>
        </div>
    )
}*/
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title:'My new website', name: 'Lorem ipsum...', author: 'Fazboy', id: 1},
        { title:'Welcome Party', name: 'Lorem ipsum...', author: 'Fawas', id: 2},
        { title:'web dev top tipz', name: 'Lorem ipsum...', author: 'Fazboy', id: 3}
    ]
    );
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)

    }

    return(
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Fazboy' )} title="Fazboy's Blogs!" />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Fawas' )} title="Fawas' Blogs!" />
        </div>
    )
}

export default Home;