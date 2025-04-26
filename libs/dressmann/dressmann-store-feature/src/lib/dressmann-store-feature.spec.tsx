import { render } from '@testing-library/react';

import DressmannStoreFeature from './dressmann-store-feature';

describe('DressmannStoreFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DressmannStoreFeature />);
    expect(baseElement).toBeTruthy();
  });
});
