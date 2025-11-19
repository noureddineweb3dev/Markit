import { useEffect } from 'react';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList({ postsList, setPostsList }) {
  useEffect(() => {
    fetch('http://localhost:8080/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPostsList(data.posts);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);
  return (
    <>
      {postsList.length > 0 && (
        <div className={classes.posts}>
          {postsList.map((e, i) => (
            <Post post={e} key={i} />
          ))}
        </div>
      )}
      {postsList.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
