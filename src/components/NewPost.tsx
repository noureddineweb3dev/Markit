function NewPost({ isOpen, handleNewPost }) {
  return <button onClick={() => handleNewPost(!isOpen)}>New Post</button>;
}

export default NewPost;
