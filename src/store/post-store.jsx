import { createContext, useCallback, useReducer, useEffect, useState } from "react";

export const PostList = createContext({
    postList: [],
    fetching :false,
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currPost, action) => {
    let newPostList = currPost;
    if (action.type === "delete") {
        newPostList = currPost.filter((post) => post.id !== action.payLoad.postId);
    }
    else if (action.type === "add-initialPosts") {
        newPostList = action.payLoad.posts;
    }
    else if (action.type === "add") {
        const { post } = action.payLoad;
        const reactions = post.reactions || { likes: 0, dislikes: 0 }; // Default values for reactions

        newPostList = [{
            id: currPost.length + 1,
            title: post.title,
            body: post.body,
            reactions,
            userId: post.userId,
            tags: post.tags
        }, ...currPost];
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    const addPost = (post) => {
        dispatchPostList({
            type: 'add',
            payLoad: { post }
        });
    };

    const addInitialPost = (posts) => {
        dispatchPostList({
            type: 'add-initialPosts',
            payLoad: { posts }
        });
    };

    const deletePost = useCallback((postId) => {
        dispatchPostList({
            type: 'delete',
            payLoad: { postId }
        });
    }, [dispatchPostList]);
    const [fetching, setFacthing] = useState(false);
    useEffect(() => {
        setFacthing(true);
        const controller = new AbortController();
        const signal = controller.signal;
        {
            fetch('https://dummyjson.com/posts', signal)
                .then(res => res.json())
                .then(data => {
                    console.log(data); // Log data to ensure it's in the expected format
                    addInitialPost(data.posts);
                    setFacthing(false);
                })
        }
        return () => {
            console.log("fetch cleanup");
            controller.abort();
        }
    }, []);


    return (
        <PostList.Provider value={{ postList, addPost, deletePost, fetching }}>
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;
