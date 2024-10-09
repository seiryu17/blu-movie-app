import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '../components/SearchBar';

describe('SearchBar Component', () => {
  test('renders input and button', () => {
    render(<SearchBar onSearch={() => { }} />);

    const inputElement = screen.getByPlaceholderText(/search for a movie.../i);
    const buttonElement = screen.getByRole('button', { name: /search/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onSearch with the input value when the form is submitted', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText(/search for a movie.../i) as HTMLInputElement;
    const buttonElement = screen.getByRole('button', { name: /search/i });

    fireEvent.change(inputElement, { target: { value: 'Inception' } });

    fireEvent.click(buttonElement);

    expect(mockOnSearch).toHaveBeenCalledWith('Inception');
  });

  test('clears the input field after submission', () => {
    render(<SearchBar onSearch={() => { }} />);

    const inputElement = screen.getByPlaceholderText(/search for a movie.../i) as HTMLInputElement;
    const buttonElement = screen.getByRole('button', { name: /search/i });

    fireEvent.change(inputElement, { target: { value: 'Inception' } });

    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe('');
  });
});
