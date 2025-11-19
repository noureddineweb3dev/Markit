import PostsList from './components/PostsList';
import NewPost from './components/NewPost';
import PostForm from './components/PostForm';
import Modal from './components/modal';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [postsList, setPostsList] = useState([]);
  const [newPost, setNewPost] = useState(false);
  function handleCloseForm() {
    setNewPost(false);
  }

  return (
    <>
      <Header>
        <NewPost isOpen={newPost} handleNewPost={setNewPost} />
      </Header>
      <main>
        {newPost && (
          <Modal onClose={handleCloseForm}>
            <PostForm
              postsList={postsList}
              setPostsList={setPostsList}
              isOpen={newPost}
              handleNewPost={setNewPost}
            />
          </Modal>
        )}
        <PostsList postsList={postsList} setPostsList={setPostsList} />
      </main>
    </>
  );
}

export default App;
