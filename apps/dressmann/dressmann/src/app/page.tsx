import { DressmannProductListFeature } from '@varner-nx/dressmann-product-list-feature';
import { DressmannStoreFeature } from '@varner-nx/dressmann-store-feature';
import { BikbokProductListFeature } from '@varner-nx/bikbok-product-list-feature';
import { Theme } from '@varner-nx/theme';
import styles from './page.module.scss';
import { BikbokStoreFeature } from '@varner-nx/bikbok-store-feature';

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
              Welcome to Dressmann
            </h1>
          </div>
          <DressmannProductListFeature /> {/* <---- "scope:dressmann" */}
          <DressmannStoreFeature /> {/* <---- "scope:dressmann" */}
          <Theme /> {/* <---- Tagged with "scope:shared" */}
          <BikbokProductListFeature /> {/* <---- "scope:bikbok" */}
          <BikbokStoreFeature /> {/* <---- "scope:bikbok" */}
        </div>
      </div>
    </div>
  );
}
