import { MdPostAdd } from 'react-icons/md';
import classes from './Header.module.css';

function NewPost({ isOpen, handleNewPost }) {
  return (
    <button className={classes.button} onClick={() => handleNewPost(!isOpen)}>
      <MdPostAdd size={18} />
      New Post
    </button>
  );
}

export default NewPost;
