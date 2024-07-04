import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import SubredditPage from './pages/SubredditPage';
import ProfilePage from './pages/ProfilePage';
import './index.css';

function App() {
    return (
        <div>
            <header>
                <h1>Reddit Clone</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                </nav>
            </header>
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/subreddit/:name" element={<SubredditPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
