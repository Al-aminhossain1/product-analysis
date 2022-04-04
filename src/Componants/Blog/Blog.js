import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='question-part'>
                <h3>01.What is Context API</h3>
                <p> <strong>Ans :</strong> We use a props drill when we send data from the parent component to the child component and the grand child component.
                    Sending data in this way is a little hassle and time consuming. And the Context API has made it easy for us to pass data without this hassle. We can use that data with uscontext in any component by loading the data in the create context. In this way, the data declared in one place is used anywhere.</p>
            </div>

            <div className='question-part'>
                <h3> 02.Semantic tag</h3>
                <p><strong>Ans :</strong> Webpages were initially created using HTML or markup language. Now with the semantic tags in HTML5 many benefits are available and things can be done faster. There is accessibility for such blind users. There are search engine friendly technologies. If we use semantic tags when creating webpages, the browser can easily capture the content, which helps in layout and design. <br />
                    Some notable semantic tags: <br />
                    Header <br />
                    Section <br />
                    Nav <br />
                    Article <br />
                    Footer

                </p>
            </div>
        </div>
    );
};

export default Blog;