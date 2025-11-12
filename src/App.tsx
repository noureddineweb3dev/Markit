import PostsList from './components/PostsList';
import NewPost from './components/NewPost';
import PostForm from './components/PostForm';
import { useState } from 'react';

function App() {
  const [postsList, setPostsList] = useState([
    { author: 'Noureddine', content: 'React.js is awesome!' },
    { author: 'Assil', content: 'I am Genius' },
  ]);
  const [newPost, setNewPost] = useState(false);

  return (
    <main>
      <NewPost isOpen={newPost} handleNewPost={setNewPost} />
      {newPost && (
        <PostForm
          postsList={postsList}
          setPostsList={setPostsList}
          isOpen={newPost}
          handleNewPost={setNewPost}
        />
      )}
      <PostsList postsList={postsList} />
    </main>
  );
}

export default App;
