import { I18n } from '@varner-nx/i18n';
import styles from './page.module.scss';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              varner-nx 👋
            </h1>
          </div>
          <I18n />
        </div>
      </div>
    </div>
  );
}
