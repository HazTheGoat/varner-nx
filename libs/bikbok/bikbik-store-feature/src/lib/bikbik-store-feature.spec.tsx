import { render } from '@testing-library/react';

import BikbikStoreFeature from './bikbik-store-feature';

describe('BikbikStoreFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BikbikStoreFeature />);
    expect(baseElement).toBeTruthy();
  });
});
