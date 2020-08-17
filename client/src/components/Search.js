import React, { useState } from "react";

function Search({ setSearchQuery }) {
    const [Post, setPost] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchQuery(Post);
        setPost('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <strong>Search for product:</strong>
                </p>
                <input
                    type="text"
                    value={Post}
                    onChange={(e) => setPost(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Search
