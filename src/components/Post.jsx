import React, { useContext } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { PostList } from '../store/post-store';

const Post = ({ post }) => {
    const { deletePost } = useContext(PostList);

    const handleDelete = () => {
        deletePost(post.id); // Assuming deletePost function expects postId as an argument
    };

    return (
        <div className="card post-card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">
                    {post.title}
                    <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        onClick={handleDelete}
                        style={{ cursor: 'pointer' }}>
                        <RiDeleteBin6Fill />
                    </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {/* Render tags */}
                {post.tags.map((tag, index) => (
                    <span key={index} className="badge text-bg-primary hashtag">{tag}</span>
                ))}
                <div className="alert alert-success reactions" role="alert">
                    This post has been reacted to by {post.reactions.likes} people.
                </div>
            </div>
        </div>
    );
};

export default Post;
