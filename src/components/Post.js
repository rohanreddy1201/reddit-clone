import React, { useState } from 'react';
import CommentSection from './CommentSection';

function Post({ post }) {
    const [upvotes, setUpvotes] = useState(post.upvotes);

    const handleUpvote = () => {
        setUpvotes(upvotes + 1);
    };

    return (
        <div className="card">
            <p>{post.content}</p>
            <button onClick={handleUpvote}>Upvote {upvotes}</button>
            <CommentSection comments={post.comments} />
        </div>
    );
}

export default Post;
