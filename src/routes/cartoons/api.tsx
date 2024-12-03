import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useMemo, useCallback, useState } from 'react';

export const Route = createFileRoute('/cartoons/api')({
  component: () => <div>Hello /cartoons/api!</div>
});

type CartoonDetail = {
  name: string;
  id: string;
  title: string;
  posterUrl: string;
  description: string;
  rating: number;
  type: string;
  likes: number;
  likedByUser: boolean;
};

export async function getCartoons(id: string): Promise<CartoonDetail> {
  const response = await fetch(`http://localhost:5000/cartoons/${id}`);
  if (!response.ok) {
    throw new Error("Ошибка загрузки данных фильма");
  }
  return await response.json();
}

export function useCartoonDetails(id: string) {
  const [cartoon, setCartoon] = useState<CartoonDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fetchCartoon = useCallback(async () => {
    try {
      setError(null); 
      const data = await getCartoons(id);
      setCartoon(data);
    } catch (err) {
      setError((err as Error).message);
    }
  }, [id]);

  const cartoonTitle = useMemo(() => cartoon?.title ?? '', [cartoon]);

  useEffect(() => {
    fetchCartoon();
  }, [fetchCartoon]);

  useEffect(() => {
    if (cartoon) {
      console.log("Данные мультфильма успешно загружены:", cartoon);
    }
  }, [cartoon]);

  return { cartoon, error, fetchCartoon, cartoonTitle};
}
