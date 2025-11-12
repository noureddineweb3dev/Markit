import Post from './Post';
import classes from './PostsList.module.css';

function PostsList({ postsList }) {
  return (
    <div className={classes.posts}>
      {postsList.map((e, i) => (
        <Post post={e} key={i} />
      ))}
    </div>
  );
}

export default PostsList;
