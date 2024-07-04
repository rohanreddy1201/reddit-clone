import React from 'react';
import { useParams } from 'react-router-dom';
import Subreddit from '../components/Subreddit';

function SubredditPage() {
    const { name } = useParams();
    return (
        <div className="main-content">
            <h2>{name} Subreddit</h2>
            <Subreddit />
        </div>
    );
}

export default SubredditPage;
