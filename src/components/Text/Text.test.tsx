import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Text } from './Text.component';

afterEach(cleanup);

describe('Text', () => {
  it('renders without error', () => {
    const { getByTestId } = render(<Text data-testid="TextComponent">Foo Bar Baz</Text>);
    const component = getByTestId('TextComponent')

    expect(component).toBeInTheDocument();
  });
});