import React, { useState } from 'react';

function CommentSection({ comments }) {
    const [newComment, setNewComment] = useState('');
    const [commentList, setCommentList] = useState(comments);

    const handleCommentSubmit = () => {
        setCommentList([...commentList, newComment]);
        setNewComment('');
    };

    return (
        <div>
            <h3>Comments</h3>
            <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment"
            />
            <button onClick={handleCommentSubmit}>Comment</button>
            <ul>
                {commentList.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
}

export default CommentSection;
