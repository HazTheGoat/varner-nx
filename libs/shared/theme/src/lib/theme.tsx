import styles from './theme.module.css';
import { Icons } from '@varner-nx/icons';

export function Theme() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Theme!</h1>
      <Icons />
    </div>
  );
}

export default Theme;
