import React from 'react';
import UserSubscription from '../components/UserSubscription';
import SubredditList from '../components/SubredditList';

function Home() {
    return (
        <div className="sidebar">
            <UserSubscription />
            <SubredditList />
        </div>
    );
}

export default Home;
