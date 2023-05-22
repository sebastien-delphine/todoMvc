import React from 'react';
import { render } from '@testing-library/react';
import { Info } from './Info';

it('should display information in footer', () => {
  const { getByText } = render(<Info />);

  expect(getByText('Double-click to edit a todo')).toBeTruthy();
  expect(getByText('Template by')).toBeTruthy();
  expect(getByText('Sindre Sorhus')).toBeTruthy();
  expect(getByText('Created by')).toBeTruthy();
  expect(getByText('you')).toBeTruthy();
  expect(getByText('Part of')).toBeTruthy();
  expect(getByText('TodoMVC')).toBeTruthy();
});
