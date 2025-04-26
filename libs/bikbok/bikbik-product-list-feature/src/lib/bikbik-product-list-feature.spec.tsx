import { render } from '@testing-library/react';

import BikbikProductListFeature from './bikbik-product-list-feature';

describe('BikbikProductListFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BikbikProductListFeature />);
    expect(baseElement).toBeTruthy();
  });
});
