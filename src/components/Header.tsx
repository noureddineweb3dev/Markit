import { MdMessage } from 'react-icons/md';
import classes from './Header.module.css';

function Header({ children }) {
  return (
    <div className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Daily Posts
      </h1>
      {children}
    </div>
  );
}

export default Header;
