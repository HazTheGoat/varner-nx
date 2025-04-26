import { render } from '@testing-library/react';

import BikbokProductListFeature from './bikbok-product-list-feature';

describe('BikbokProductListFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BikbokProductListFeature />);
    expect(baseElement).toBeTruthy();
  });
});
