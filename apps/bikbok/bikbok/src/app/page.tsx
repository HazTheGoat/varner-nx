import { BikbokProductListFeature } from '@varner-nx/bikbok-product-list-feature';
import { BikbokStoreFeature } from '@varner-nx/bikbok-store-feature';
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
              Welcome to Bikbok
            </h1>
          </div>
          <BikbokProductListFeature />
          <BikbokStoreFeature />
        </div>
      </div>
    </div>
  );
}
