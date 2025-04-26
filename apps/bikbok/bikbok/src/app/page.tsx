import { BikbokProductListFeature } from '@varner-nx/bikbok-product-list-feature';
import { BikbokStoreFeature } from '@varner-nx/bikbok-store-feature';
import styles from './page.module.scss';
import { Theme } from '@varner-nx/theme';
import { DressmannProductListFeature } from '@varner-nx/dressmann-product-list-feature';
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
          <DressmannProductListFeature /> {/* <---- "scope:dressmann" */}
          <BikbokProductListFeature /> {/* <---- "scope:bikbok" */}
          <BikbokStoreFeature /> {/* <---- "scope:bikbok" */}
          <Theme /> {/* This is a shared library tagged with "scope:shared" */}
        </div>
      </div>
    </div>
  );
}
