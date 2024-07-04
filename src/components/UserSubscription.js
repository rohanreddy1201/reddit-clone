import React, { useState } from 'react';

function UserSubscription() {
    const [subreddit, setSubreddit] = useState('');

    const handleSubscribe = () => {
        console.log(`Subscribed to ${subreddit}`);
        setSubreddit('');
    };

    return (
        <div className="card">
            <h2>Subscribe to a Subreddit</h2>
            <input
                type="text"
                value={subreddit}
                onChange={(e) => setSubreddit(e.target.value)}
                placeholder="Subreddit name"
            />
            <button onClick={handleSubscribe}>Subscribe</button>
        </div>
    );
}

export default UserSubscription;
