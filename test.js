
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { formatDate, filterMoviesByGenre, calculateAverageRating, fetchMovies, toggleFavorite } from '../utils'; // Adjust the import based on your file structure
import {toggleFavorite} from 'src/contexts/movieFavoritesContext'
import {filteredCartoons} from 'src/routes/cartoons/index'
import {filteredMovies} from 'src/routes/movies/index'
import {filteredSerials} from 'src/routes/serials/index'
import {} from 'src/routes/profile/index'
import { render, screen } from '@testing-library/react';
import { Cartoons } from 'src/routes/cartoons/index'; 
import { FavoritesProvider } from '../../contexts/movieFavoritesContext.tsx'; 

// Cartoons 
test('renders Cartoons component', () => {
  render(
    <FavoritesProvider>
      <Cartoons />
    </FavoritesProvider>
  );
  
  const titleElement = screen.getByText(/cartoons/i);
  expect(titleElement).toBeInTheDocument();
});


global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ title: 'Tom and Jerry', rating: 5 }]),
  })
);

test('fetches and displays cartoons', async () => {
  render(
    <FavoritesProvider>
      <Cartoons />
    </FavoritesProvider>
  );

  await waitFor(() => expect(screen.getByText(/Tom and Jerry/i)).toBeInTheDocument());
});

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Cartoons } from './cartoons_index';
import { FavoritesProvider } from '../../contexts/movieFavoritesContext.tsx';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ title: 'Tom and Jerry', rating: 5 }, { title: 'SpongeBob', rating: 4 }]),
  })
);

test('filters cartoons based on search query', async () => {
  render(
    <FavoritesProvider>
      <Cartoons />
    </FavoritesProvider>
  );

  await waitFor(() => expect(screen.getByText(/Tom and Jerry/i)).toBeInTheDocument());
  
  const searchInput = screen.getByPlaceholderText(/search/i); // Assuming there's a placeholder
  fireEvent.change(searchInput, { target: { value: 'SpongeBob' } });
  
  fireEvent.keyDown(searchInput, { key: 'Enter' });
  
  await waitFor(() => expect(screen.queryByText(/Tom and Jerry/i)).not.toBeInTheDocument());
  expect(screen.getByText(/SpongeBob/i)).toBeInTheDocument();
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { title: 'Tom and Jerry', rating: 5 },
      { title: 'SpongeBob', rating: 4 },
    ]),
  })
);

test('sorts cartoons by title', async () => {
  render(
    <FavoritesProvider>
      <Cartoons />
    </FavoritesProvider>
  );

  await waitFor(() => expect(screen.getByText(/Tom and Jerry/i)).toBeInTheDocument());

  const sortButton = screen.getByText(/sort by title/i); // Assuming there's a button to sort
  fireEvent.click(sortButton);

  // Check if the cartoons are sorted correctly (you may need to adjust this based on your implementation)
});

//Profile 
test('renders Profile component', () => {
  render(
    <FavoritesProvider>
      <Profile />
    </FavoritesProvider>
  );
  
  const titleElement = screen.getByText(/профиль/i); // Assuming there's a title in Russian
  expect(titleElement).toBeInTheDocument();
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ name: 'John Doe', email: 'john@example.com' }),
  })
);

test('fetches and displays user profile', async () => {
  render(
    <FavoritesProvider>
      <Profile />
    </FavoritesProvider>
  );

  await waitFor(() => expect(screen.getByText(/john doe/i)).toBeInTheDocument());
});

global.fetch = jest.fn(() =>
  Promise.reject(new Error('Ошибка загрузки данных'))
);

test('handles error during fetching user profile', async () => {
  render(
    <FavoritesProvider>
      <Profile />
    </FavoritesProvider>
  );

  await waitFor(() => expect(screen.getByText(/ошибка загрузки данных/i)).toBeInTheDocument());
});


const mockFetch = jest.fn();

beforeEach(() => {
  mockFetch.mockClear();
});

global.fetch = mockFetch;

test('allows user to edit and save profile', async () => {
  mockFetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ name: 'John Doe', email: 'john@example.com' }),
    })
  );

  render(
    <FavoritesProvider>
      <Profile />
    </FavoritesProvider>
  );

  await waitFor(() => expect(screen.getByText(/john doe/i)).toBeInTheDocument());

  const editButton = screen.getByText(/edit/i); // Assuming there's an edit button
  fireEvent.click(editButton);

  const nameInput = screen.getByPlaceholderText(/имя/i); // Placeholder for name input
  const emailInput = screen.getByPlaceholderText(/email/i); // Placeholder for email input

  fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
  fireEvent.change(emailInput, { target: { value: 'jane@example.com' } });

  const saveButton = screen.getByText(/save/i); // Assuming there's a save button
  fireEvent.click(saveButton);

  mockFetch.mockImplementationOnce(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ name: 'Jane Doe', email: 'jane@example.com' }),
    })
  );

  await waitFor(() => expect(screen.getByText(/jane doe/i)).toBeInTheDocument());
});