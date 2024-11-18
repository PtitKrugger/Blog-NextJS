'use client'

import Header from "./components/shared/Header.jsx";
import PostCard from "./posts/PostCard.jsx";
import { usePosts } from "./context/PostsContext.jsx";

export default function Home() {
    const {posts, setPosts} = usePosts();

    function PostsList() {
        return (
            <div className="d-flex flex-column flex-nowrap vh-100">
                <div className="d-flex align-items-center justify-content-center mt-2">
                    <h4 className="mb-0">Liste des posts</h4>                    
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="row row-cols-3 w-75">
                        {posts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <PostsList />
        </>
    );
}
