import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { FavoritesProvider } from '../src/contexts/movieFavoritesContext';
import Cartoons from '..src/routes/cartoons/index';


//cartoons 
global.fetch = jest.fn();

describe('Cartoons Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders Cartoons component with a title', () => {
    render(
      <FavoritesProvider>
        <Cartoons />
      </FavoritesProvider>
    );

    const titleElement = screen.getByText(/cartoons/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('fetches and displays cartoons from JSON server', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: 1, title: 'Tom and Jerry' }, { id: 2, title: 'SpongeBob' }],
    });

    render(
      <FavoritesProvider>
        <Cartoons />
      </FavoritesProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Tom and Jerry/i)).toBeInTheDocument();
      expect(screen.getByText(/SpongeBob/i)).toBeInTheDocument();
    });
  });

  test('filters cartoons based on search input', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: 1, title: 'Tom and Jerry' }, { id: 2, title: 'SpongeBob' }],
    });

    render(
      <FavoritesProvider>
        <Cartoons />
      </FavoritesProvider>
    );

    const searchInput = screen.getByPlaceholderText(/search/i);
    fireEvent.change(searchInput, { target: { value: 'Смешарики' } });

    await waitFor(() => {
      expect(screen.queryByText(/Tom and Jerry/i)).not.toBeInTheDocument();
      expect(screen.getByText(/Смешарики/i)).toBeInTheDocument();
    });
  });

  test('displays error message on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(
      <FavoritesProvider>
        <Cartoons />
      </FavoritesProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
    });
  });

  test('handles adding a cartoon to favorites', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: 30, title: 'Маша и медведь' }],
    });

    render(
      <FavoritesProvider>
        <Cartoons />
      </FavoritesProvider>
    );

    const addToFavoritesButton = await screen.findByText(/add to favorites/i);
    fireEvent.click(addToFavoritesButton);

    expect(fetch).toHaveBeenCalledWith('http://localhost:5000/favorites', expect.anything());
  });
});
