// import React, { useContext, useRef } from 'react';
// import { PostList } from '../store/post-store';
import { useNavigate,Form,redirect } from 'react-router-dom';

const CreatePost = () => {
    // const { addPost } = useContext(PostList);
    // const navigate = useNavigate()
    // const userId = useRef();
    // const body = useRef();
    // const title = useRef();
    // const tags = useRef();
    // const likes = useRef();
    // const dislikes = useRef();


    // const handleSubmit = (e) => {
    //     // e.preventDefault();
    //     // const post = {
    //     //     userId: userId.current.value,
    //     //     title: title.current.value,
    //     //     body: body.current.value,
    //     //     reactions: {
    //     //         likes: parseInt(likes.current.value) || 0,
    //     //         dislikes: parseInt(dislikes.current.value) || 0
    //     //     },
    //     //     tags: tags.current.value.split(','),
    //     // };
    //     // userId.current.value = '';
    //     // title.current.value = '';
    //     // body.current.value = '';
    //     // likes.current.value = '';
    //     // dislikes.current.value = '';
    //     // tags.current.value = '';


    // };

    return (
        <Form method='POST' className="create-post">
            <div className="mb-3">
                <label htmlFor="userId" className="form-label">User ID</label>
                <input
                    type="text"
                    // ref={userId}
                    name ='userId'
                    className="form-control"
                    id="userId"
                    placeholder="Enter your user ID"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    //ref={title}
                    name='title'
                    placeholder="Enter post title"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Post body</label>
                <textarea
                    className="form-control"
                    id="body"
                    // ref={body}
                    name ='body'
                    rows="3"
                    placeholder="Tell us more about it"
                ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="likes" className="form-label">Likes</label>
                <input
                    type="number"
                    className="form-control"
                    id="likes"
                    // ref={likes}
                    name = 'likes'
                    placeholder="Number of likes"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="dislikes" className="form-label">Dislikes</label>
                <input
                    type="number"
                    className="form-control"
                    id="dislikes"
                    // ref={dislikes}
                    name ='dislikes'
                    placeholder="Number of dislikes"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="form-label">Tags</label>
                <input
                    type="text"
                    className="form-control"
                    id="tags"
                    // ref={tags}
                    name = 'tags'
                    placeholder="Enter the tags for the post"
                />
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </Form>
    );
};

export async function createPostAction(data) {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    console.log(postData);

    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData) // Changed from `post` to `postData`
    })
        .then(res => res.json())
        .then(resObj => {
            console.log(resObj);
            // Add your logic to handle the response, such as adding the post to your state
        })
        .catch(error => {
            console.error('Error:', error);
        });

    return redirect("/post-list");
}


export default CreatePost;
