import { useState } from 'react';
import classes from './PostForm.module.css';

function FormPost({ postsList, setPostsList, isOpen, handleNewPost }) {
  const [newPost, setNewPost] = useState({ author: '', content: '' });
  const [error, setError] = useState('');

  function handleAddPost() {
    if (newPost.author.trim() && newPost.content.trim()) {
      fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });

      setPostsList([newPost, ...postsList]);
      setNewPost({ author: '', content: '' });
      setError('');
      handleNewPost(!isOpen);
    } else {
      setError('Please fill in both Author and Content fields');
    }
  }
  return (
    <form className={classes.form}>
      {error && <div className={classes.error}>{error}</div>}
      <label htmlFor="author">Author</label>

      <input
        type="text"
        id="author"
        required
        value={newPost.author}
        onChange={(e) => setNewPost({ author: e.target.value, content: newPost.content })}
      />
      <label htmlFor="content">Text</label>
      <textarea
        id="content"
        rows={3}
        required
        value={newPost.content}
        onChange={(e) => setNewPost({ author: newPost.author, content: e.target.value })}
      />
      <div className={classes.actions}>
        <button type="button" onClick={() => handleNewPost(!isOpen)}>
          Cancel
        </button>
        <button onClick={handleAddPost}>Add Post</button>
      </div>
    </form>
  );
}

export default FormPost;
