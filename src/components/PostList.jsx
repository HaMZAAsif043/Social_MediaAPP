import React, { useContext } from 'react';
import Post from './Post.jsx';
import { PostList as postListData } from '../store/post-store';
import WelcomeMassage from './WelcomeMassage.jsx';
import LoadingSpinnner from './LoadingSpinner.jsx';

const PostList = () => {
    const { postList, fetching } = useContext(postListData);

    return (
        <>
            {fetching && <LoadingSpinnner />}
            {!fetching && postList.length === 0 ? <WelcomeMassage /> : null}
            {!fetching && postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
};

export default PostList;
