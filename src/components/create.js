import { useState } from "react";

function Create(){

    // vars using useState for each input
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover, setCover] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        // displays submitted data to the console
        console.log("Title: "+ title + " Cover: " + cover + " Author: "+ author);

    }

    return (
        // create component that displays a form for creating more books to the book data in read.js
        <div>
            <h2>Hello from Create component</h2>
            <form onSubmit={handleSubmit}>
                {/* Seperate div for each form input for books*/}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                    className="form-control"
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Front Page Url: </label>
                    <input type="text"
                    className="form-control"
                    value={cover}
                    onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div>
                    {/* submission space for our new book*/}
                    <input type="submit" value="Add Book"></input>
                </div>
            </form>
        </div>
    );
    }
    
    export default Create;