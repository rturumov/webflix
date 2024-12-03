import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { FavoritesProvider } from '../src/contexts/movieFavoritesContext';
import Movies from '../src/routes/movies/index';


global.fetch = jest.fn();

describe('Movies Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders Movies component with a title', () => {
    render(
      <FavoritesProvider>
        <Movies />
      </FavoritesProvider>
    );

    const titleElement = screen.getByText(/movies/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('fetches and displays movies from JSON server', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: 3, title: 'Интерстеллар' }, { id: 4, title: 'Матрица' }],
    });

    render(
      <FavoritesProvider>
        <Movies />
      </FavoritesProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Inception/i)).toBeInTheDocument();
      expect(screen.getByText(/Titanic/i)).toBeInTheDocument();
    });
  });

//   test('filters movies by genre', async () => {
//     fetch.mockResolvedValueOnce({
//       ok: true,
//       json: async () => [{ id: 1, title: 'Inception', genre: 'Sci-Fi' }, { id: 2, title: 'Titanic', genre: 'Romance' }],
//     });

//     render(
//       <FavoritesProvider>
//         <Movies />
//       </FavoritesProvider>
//     );

//     const genreDropdown = screen.getByText(/select genre/i);
//     fireEvent.click(genreDropdown);
//     fireEvent.click(screen.getByText(/sci-fi/i));

//     await waitFor(() => {
//       expect(screen.getByText(/Inception/i)).toBeInTheDocument();
//       expect(screen.queryByText(/Titanic/i)).not.toBeInTheDocument();
//     });
//   });

  test('displays error when unable to fetch movies', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(
      <FavoritesProvider>
        <Movies />
      </FavoritesProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
    });
  });

  test('handles adding and removing a movie from favorites', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: 3, title: 'Интерстеллар' }],
    });

    render(
      <FavoritesProvider>
        <Movies />
      </FavoritesProvider>
    );

    const toggleFavoriteButton = await screen.findByText(/toggle favorite/i);
    fireEvent.click(toggleFavorite);

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
