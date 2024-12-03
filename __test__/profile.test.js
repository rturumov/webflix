import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { FavoritesProvider } from '../src/contexts/movieFavoritesContext';
import Profile from '../src/routes/profile/index';


global.fetch = jest.fn();

describe('Profile Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders Profile component with a title', () => {
    render(
      <FavoritesProvider>
        <Profile />
      </FavoritesProvider>
    );

    const titleElement = screen.getByText(/профиль/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('fetches and displays user profile', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: 'aaa', email: 'aldiyar@mail.ru' }),
    });

    render(
      <FavoritesProvider>
        <Profile />
      </FavoritesProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/john doe/i)).toBeInTheDocument();
      expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
    });
  });

  test('handles error during fetching user profile', async () => {
    fetch.mockRejectedValueOnce(new Error('Ошибка загрузки данных'));

    render(
      <FavoritesProvider>
        <Profile />
      </FavoritesProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(/ошибка загрузки данных/i)).toBeInTheDocument();
    });
  });

  test('allows user to edit and save profile', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: 'aaa', email: 'aldiyar@mail.ru' }),
    });

    render(
      <FavoritesProvider>
        <Profile />
      </FavoritesProvider>
    );

    await waitFor(() => expect(screen.getByText(/john doe/i)).toBeInTheDocument());

    const editButton = screen.getByText(/edit/i);
    fireEvent.click(editButton);

    const nameInput = screen.getByPlaceholderText(/имя/i); // assuming placeholder for name input
    const emailInput = screen.getByPlaceholderText(/email/i); // placeholder for email input

    fireEvent.change(nameInput, { target: { value: 'aldiyar' } });
    fireEvent.change(emailInput, { target: { value: 'aaabba@mail.ru' } });

    const saveButton = screen.getByText(/save/i);
    fireEvent.click(saveButton);

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: 'aldiyar', email: 'aaabba@mail.ru' }),
    });

    await waitFor(() => expect(screen.getByText(/aldiyar/i)).toBeInTheDocument());
    expect(screen.getByText(/aaabba@mail.ru/i)).toBeInTheDocument();
  });

  test('displays error on failed profile update', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to update profile'));

    render(
      <FavoritesProvider>
        <Profile />
      </FavoritesProvider>
    );

    await waitFor(() => expect(screen.getByText(/failed to update profile/i)).toBeInTheDocument());
  });
});
