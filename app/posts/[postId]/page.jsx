'use client'

import Header from "@/app/components/shared/Header";
import { usePosts } from "@/app/context/PostsContext";
import { useState, useRef } from "react";

export default function Post({ params }) {
    const postId = decodeURIComponent(params.postId);
    const {posts, setPosts} = usePosts();
    const post = posts.find((post) => post.id == postId);
    const postIndex = posts.findIndex((post) => post.id == postId);
    const [edit, setEdit] = useState(false);
    const postBody = useRef(null);
    const postTitle = useRef(null);

    const saveChanges = () => {
        const newPost = {...post};
        const postsCopy = posts.slice();
        newPost.title = postTitle.current.value;
        newPost.body = postBody.current.value;
        postsCopy[postIndex] = newPost
        setPosts(postsCopy)
        setEdit(false);
    }

    return (
        <>
            <Header />
            { !edit ?
                <div className="container border p-4 mt-3 rounded shadow-sm">
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button className="btn btn-primary" onClick={() => setEdit(true)}>Modifier</button>
                </div>
                :
                    <div>
                        <h3 className="text-center mt-2">Modifier le post</h3>
                        <div className="container border p-4 mt-3 rounded shadow-sm">
                        <div className="mb-3">
                            <label htmlFor="postTitle" className="form-label">Titre</label>
                            <textarea 
                                id="postTitle" 
                                ref={postTitle} 
                                className="form-control" 
                                rows="3"
                            >
                            {post.title}
                            </textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="postBody" className="form-label">Contenu du post</label>
                            <textarea 
                            id="postBody" 
                            ref={postBody} 
                            className="form-control" 
                            rows="5"
                            >
                            {post.body}
                            </textarea>
                        </div>

                        <button className="btn btn-primary" onClick={saveChanges}>Sauvegarder</button>
                        </div>                        
                    </div>

            }

        </>
    );
}