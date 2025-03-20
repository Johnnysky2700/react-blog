import { useState } from "react";
import BlockList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    return ( 
        <div className="home">
            <BlockList blogs={blogs} title="All Blogs!"/>
            <BlockList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Johnnysky's blogs"/>
        </div>
     );
}
export default Home;