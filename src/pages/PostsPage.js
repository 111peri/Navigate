import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components/Loading';

export function PostsPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    function getPosts() {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (response.status >= 200 && response.status <= 204) {
                    return response.json();
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            })
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((error) => {
                alert(error.message);
                setLoading(false);
            });
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <h1>Title</h1>
            <ul>
                {loading ? (
                    <Loading />
                ) : (
                    posts.map((post) => (
                        <li key={post.id}>
                            {post.title}
                            <Link to={`/posts/${post.id}`}> подробнее</Link>
                        </li>
                    ))
                )}
            </ul>
        </>
    );
}



