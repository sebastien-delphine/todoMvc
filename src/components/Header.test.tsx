import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

it('should display Todos header', () => {
  const { getByText } = render(<Header />);

  expect(getByText('todos')).toBeTruthy();
});