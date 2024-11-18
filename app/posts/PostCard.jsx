'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PostCard({ post }) {
    const router = useRouter();

    return (
        <div className="col my-3">
            <div className="card">
                <img src="/assets/blog-image.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.body}</p>
                    <Link href={`/posts/${encodeURIComponent(post.id)}`} className="btn btn-primary">Voir l'article</Link>
                </div>
            </div>
        </div>
    );
}