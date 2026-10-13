import img from "./image1.jpg"

export interface Dish {
  id: number;
  title: string;
  description: string;
  price: string;
  image?: string;
}

export const popularDishes: Dish[] = [
  {
    id: 1,
    title: "Pâtes à la truffe",
    description: "Crème, truffe noire, parmesan",
    price: "12 000 FCFA",
    image: img
  },
  {
    id: 2,
    title: "Burger Classique",
    description: "Bœuf, cheddar, salade, sauce maison",
    price: "9 000 FCFA",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Salade César",
    description: "Poulet grillé, parmesan, croûtons",
    price: "8 000 FCFA",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Fondant au chocolat",
    description: "Chocolat noir, cœur coulant",
    price: "5 000 FCFA",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  }
];