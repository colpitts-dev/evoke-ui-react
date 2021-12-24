import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Heading } from './Heading.component';

afterEach(cleanup);

describe('Heading', () => {
  it('renders without error', () => {
    const { getByTestId } = render(<Heading data-testid="HeadingComponent">Foo Bar Baz</Heading>);
    const component = getByTestId('HeadingComponent')

    expect(component).toBeInTheDocument();
  });
});