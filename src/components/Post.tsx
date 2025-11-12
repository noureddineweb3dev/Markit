import classes from './Post.module.css';

function Post({ post }) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{post.author}</p>
      <p className={classes.text}>{post.content}</p>
    </div>
  );
}

export default Post;
