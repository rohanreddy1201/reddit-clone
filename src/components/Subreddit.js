import React, { useState } from 'react';
import Post from './Post';

function Subreddit() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    const handlePostSubmit = () => {
        const post = { content: newPost, upvotes: 0, comments: [] };
        setPosts([post, ...posts]);
        setNewPost('');
    };

    return (
        <div className="card">
            <h2>Subreddit Timeline</h2>
            <input
                type="text"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Write a post"
            />
            <button onClick={handlePostSubmit}>Submit</button>
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
}

export default Subreddit;
