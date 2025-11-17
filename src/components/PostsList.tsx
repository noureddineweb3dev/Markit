import Post from './Post';
import classes from './PostsList.module.css';

function PostsList({ postsList }) {
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
