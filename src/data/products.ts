import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  color: string;
  sizes: string[];
  category: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Camisa Brasil 2026 — Home",
    price: 299.90,
    image: product1,
    rating: 4.8,
    reviews: 342,
    color: "Verde",
    sizes: ["P", "M", "G", "GG", "XGG"],
    category: "Titular",
    badge: "Lançamento",
  },
  {
    id: "2",
    name: "Camisa Brasil 2026 — Amarela Clássica",
    price: 279.90,
    image: product2,
    rating: 4.9,
    reviews: 521,
    color: "Amarelo",
    sizes: ["P", "M", "G", "GG"],
    category: "Titular",
    badge: "Mais vendida",
  },
  {
    id: "3",
    name: "Camisa Brasil 2026 — Away",
    price: 289.90,
    image: product3,
    rating: 4.7,
    reviews: 198,
    color: "Azul",
    sizes: ["P", "M", "G", "GG", "XGG"],
    category: "Visitante",
  },
  {
    id: "4",
    name: "Camisa Brasil 2026 — Edição Especial",
    price: 319.90,
    image: product4,
    rating: 4.6,
    reviews: 87,
    color: "Branco",
    sizes: ["M", "G", "GG"],
    category: "Especial",
    badge: "Edição Limitada",
  },
  {
    id: "5",
    name: "Camisa Brasil 2026 — Treino",
    price: 199.90,
    image: product5,
    rating: 4.5,
    reviews: 256,
    color: "Verde",
    sizes: ["P", "M", "G", "GG", "XGG"],
    category: "Treino",
  },
  {
    id: "6",
    name: "Camisa Brasil 2026 — Black Edition",
    price: 349.90,
    image: product6,
    rating: 4.9,
    reviews: 145,
    color: "Preto",
    sizes: ["P", "M", "G", "GG"],
    category: "Especial",
    badge: "Premium",
  },
];

export const reviews = [
  {
    id: "1",
    name: "Lucas M.",
    rating: 5,
    comment: "Qualidade incrível! O tecido é muito confortável e o acabamento é impecável. Melhor camisa que já tive.",
    date: "15 Mar 2026",
    avatar: "LM",
    verified: true,
  },
  {
    id: "2",
    name: "Ana C.",
    rating: 5,
    comment: "Amei a personalização! Coloquei meu nome e ficou perfeito. Entrega super rápida.",
    date: "12 Mar 2026",
    avatar: "AC",
    verified: true,
  },
  {
    id: "3",
    name: "Pedro H.",
    rating: 4,
    comment: "Camisa linda, material premium. Só achei que poderia ter mais opções de patches.",
    date: "10 Mar 2026",
    avatar: "PH",
    verified: true,
  },
  {
    id: "4",
    name: "Juliana S.",
    rating: 5,
    comment: "Presente perfeito pro meu marido! A Black Edition é simplesmente espetacular.",
    date: "08 Mar 2026",
    avatar: "JS",
    verified: true,
  },
];
