import React, { useState } from 'react';
import { addPost } from './services/posts.service.js';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleCoverPhotoChange = (event) => {
    setCoverPhoto(event.target.files[0]);
  };

  const handlePublish = () => {
    // Perform actions to publish the post, like sending data to a server
    console.log('Post published:', { title, body, coverPhoto });

    let formData= new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("cover", coverPhoto);


    

    addPost(formData).then((post)=>{
        if(post){
            navigate("/home/posts");
        }
    })
    // Reset the form
    setTitle('');
    setBody('');
    setCoverPhoto(null);
  };

  const handleCancel = () => {
    // Perform actions to cancel post creation
    console.log('Post creation canceled');
    // Reset the form
    setTitle('');
    setBody('');
    setCoverPhoto(null);
  };

  return (
    <div className="container mt-4">
      <h1>Create Post</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="4"
            placeholder="Enter body"
            value={body}
            onChange={handleBodyChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="coverPhoto" className="form-label">
            Cover Photo
          </label>
          <input
            type="file"
            className="form-control"
            id="coverPhoto"
            accept="image/*"
            onChange={handleCoverPhotoChange}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handlePublish}>
          Publish
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
