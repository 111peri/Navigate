import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PostsPage } from './pages/PostsPage';
import { LayOutPage } from './hoc/LayOutPage';
import { Post } from './components/Post';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PostsPage />} />
                <Route path="/" element={<LayOutPage />}>
                    <Route path="posts/:id" element={<Post />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;


