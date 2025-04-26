import { render } from '@testing-library/react';

import BikbokStoreFeature from './bikbok-store-feature';

describe('BikbokStoreFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BikbokStoreFeature />);
    expect(baseElement).toBeTruthy();
  });
});
