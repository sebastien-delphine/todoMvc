import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Header } from './Header';

const mockOnAddTodoPress = jest.fn();

it('should display Todos header', () => {
  const { getByText } = render(<Header onAddTodoPress={mockOnAddTodoPress} />);

  expect(getByText('todos')).toBeTruthy();
});

it('should display new todo when user fill input field', async () => {
  const { getByTestId } = render(
    <Header onAddTodoPress={mockOnAddTodoPress} />
  );
  const input = getByTestId('input-add-todo-field') as HTMLInputElement;

  fireEvent.change(input, { target: { value: 'test' } });

  expect(input.value).toBe('test');

  fireEvent.change(input, { key: { value: 'Enter' } });
  fireEvent.keyDown(input, { key: 'Enter' });

  expect(mockOnAddTodoPress).toHaveBeenNthCalledWith(1, 'test');
});
