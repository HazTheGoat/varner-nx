import { render } from '@testing-library/react';

import DressmannProductListFeature from './dressmann-product-list-feature';

describe('DressmannProductListFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DressmannProductListFeature />);
    expect(baseElement).toBeTruthy();
  });
});
