import React, { useState, useEffect } from 'react';

function Profile() {
    const [profile, setProfile] = useState({
        username: 'User1',
        subscribedSubreddits: ['reactjs', 'webdev'],
        upvotesReceived: 5,
    });

    useEffect(() => {
        // Fetch user profile from an API or use static data
        // setProfile(fetchedProfile);
    }, []);

    return (
        <div className="card">
            <h2>User Profile</h2>
            <p>Username: {profile.username}</p>
            <p>Subscribed Subreddits: {profile.subscribedSubreddits.join(', ')}</p>
            <p>Upvotes Received: {profile.upvotesReceived}</p>
        </div>
    );
}

export default Profile;
