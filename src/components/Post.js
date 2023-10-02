
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from './Loading';

export function Post() {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    function getPost() {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                if (response.status >= 200 && response.status <= 204) {
                    return response.json();
                } else {
                    throw new Error(`Error: ${response.status}`);
                }
            })
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch((error) => {
                alert(error.message);
                setLoading(false);
            });
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <h1>{post?.title}</h1>
                    <p>{post?.body}</p>
                </div>
            )}
        </>
    );
}



