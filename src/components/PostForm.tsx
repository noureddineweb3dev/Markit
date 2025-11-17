import { useState } from 'react';
import classes from './PostForm.module.css';

function FormPost({ postsList, setPostsList, isOpen, handleNewPost }) {
  const [newPost, setNewPost] = useState({ author: '', content: '' });
  const [error, setError] = useState('');

  function handleAddPost() {
    if (newPost.author.trim() && newPost.content.trim()) {
      setPostsList([...postsList, newPost]);
      setNewPost({ author: '', content: '' });
      setError('');
      handleNewPost(!isOpen);
    } else {
      setError('Please fill in both Author and Content fields');
    }
  }
  return (
    <div className={classes.modal}>
      <div className={classes.backdrop}>
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
      </div>
    </div>
  );
}

export default FormPost;
