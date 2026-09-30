import { create } from 'zustand';
import sneaker from '../assets/item1.png';

interface BearState {
  bears: number;
  sneakers: {
    id: number;
    title: string;
    price: number;
    image: string;
  }[];
  increasePopulation: () => void;
  decreasePopulation: () => void;
}

export const useBear = create<BearState>((set) => ({
  bears: 100,
  sneakers: [
    {
      id: 1,
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      image: sneaker,
    },
    {
      id: 2,
      title: 'Мужские Кроссовки Nike Air Max 270',
      price: 13999,
      image: sneaker,
    },
    {
      id: 3,
      title: 'Мужские Кроссовки Nike Air Force 1',
      price: 14999,
      image: sneaker,
    },
    {
      id: 4,
      title: 'Мужские Кроссовки Nike Dunk Low',
      price: 15999,
      image: sneaker,
    },
    {
      id: 5,
      title: 'Мужские Кроссовки Nike Air Jordan 1',
      price: 17999,
      image: sneaker,
    },
    {
      id: 6,
      title: 'Мужские Кроссовки Nike Court Vision',
      price: 11999,
      image: sneaker,
    },
    {
      id: 7,
      title: 'Мужские Кроссовки Nike Revolution',
      price: 10999,
      image: sneaker,
    },
    {
      id: 8,
      title: 'Мужские Кроссовки Nike Air Max 90',
      price: 16999,
      image: sneaker,
    },
    {
      id: 9,
      title: 'Мужские Кроссовки Nike Air Max SC',
      price: 12999,
      image: sneaker,
    },
    {
      id: 10,
      title: 'Мужские Кроссовки Nike Waffle Debut',
      price: 13999,
      image: sneaker,
    },
    {
      id: 11,
      title: 'Мужские Кроссовки Nike Venture Runner',
      price: 14999,
      image: sneaker,
    },
    {
      id: 12,
      title: 'Мужские Кроссовки Nike Court Legacy',
      price: 11999,
      image: sneaker,
    },
  ],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
}));
