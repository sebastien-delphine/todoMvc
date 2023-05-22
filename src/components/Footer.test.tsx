import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

it('should display number of remaining todos', () => {
  const { getByText } = render(<Footer />);

  expect(getByText('0')).toBeTruthy();
  expect(getByText('item left')).toBeTruthy();
});

it('should display filter button', () => {
  const { getByText } = render(<Footer />);

  expect(getByText('All')).toBeTruthy();
  expect(getByText('Active')).toBeTruthy();
  expect(getByText('Completed')).toBeTruthy();
  expect(getByText('Clear completed')).toBeTruthy();
});
