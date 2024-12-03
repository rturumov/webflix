import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { FavoritesProvider } from '../../contexts/movieFavoritesContext'; 
import Serials from '../../routes/serials/index';



global.fetch = jest.fn();

describe('Serials Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders Serials component with a title', () => {
    render(
      <FavoritesProvider>
        <Serials />
      </FavoritesProvider>
    );

    const titleElement = screen.getByText(/serials/i); // assuming title is in English
    expect(titleElement).toBeInTheDocument();
  });

  test('fetches and displays serials from JSON server', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: 15, title: 'Во все тяжкие' }, { id: 16, title: 'Черное зеркало' }],
    });

    render(
      <FavoritesProvider>
        <Serials />
      </FavoritesProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Breaking Bad/i)).toBeInTheDocument();
      expect(screen.getByText(/Friends/i)).toBeInTheDocument();
    });
  });

//   test('filters serials by genre', async () => {
//     fetch.mockResolvedValueOnce({
//       ok: true,
//       json: async () => [{ id: 15, title: 'Breaking Bad', genre: 'Drama' }, { id: 2, title: 'Friends', genre: 'Comedy' }],
//     });

//     render(
//       <FavoritesProvider>
//         <Serials />
//       </FavoritesProvider>
//     );

//     const genreDropdown = screen.getByText(/select genre/i);
//     fireEvent.click(genreDropdown);
//     fireEvent.click(screen.getByText(/drama/i));

//     await waitFor(() => {
//       expect(screen.getByText(/Breaking Bad/i)).toBeInTheDocument();
//       expect(screen.queryByText(/Friends/i)).not.toBeInTheDocument();
//     });
//   });

  test('displays error when unable to fetch serials', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(
      <FavoritesProvider>
        <Serials />
      </FavoritesProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
    });
  });

  test('handles adding and removing a serial from favorites', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: 15, title: 'Во все тяжкие' }],
    });

    render(
      <FavoritesProvider>
        <Serials />
      </FavoritesProvider>
    );

    const toggleFavoriteButton = await screen.findByText(/toggle favorite/i);
    fireEvent.click(toggleFavoriteButton);

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
