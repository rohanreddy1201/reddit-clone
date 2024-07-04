import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SubredditList() {
    const [subreddits, setSubreddits] = useState([]);

    useEffect(() => {
        setSubreddits(['reactjs', 'webdev', 'programming']);
    }, []);

    return (
        <div className="card">
            <h2>Subreddits</h2>
            <ul>
                {subreddits.map((subreddit) => (
                    <li key={subreddit}>
                        <Link to={`/subreddit/${subreddit}`}>{subreddit}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SubredditList;
