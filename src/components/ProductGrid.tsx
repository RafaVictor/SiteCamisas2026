import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const colors = ["Todos", "Verde", "Amarelo", "Azul", "Branco", "Preto"];
const sizes = ["Todos", "P", "M", "G", "GG", "XGG"];

const ProductGrid = () => {
  const [activeColor, setActiveColor] = useState("Todos");
  const [activeSize, setActiveSize] = useState("Todos");

  const filtered = products.filter((p) => {
    const colorMatch = activeColor === "Todos" || p.color === activeColor;
    const sizeMatch = activeSize === "Todos" || p.sizes.includes(activeSize);
    return colorMatch && sizeMatch;
  });

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Nossa Coleção
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Escolha sua camisa oficial da seleção brasileira para a Copa 2026
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm font-medium text-muted-foreground self-center mr-2">Cor:</span>
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setActiveColor(c)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                  activeColor === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm font-medium text-muted-foreground self-center mr-2">Tamanho:</span>
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSize(s)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                  activeSize === s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            Nenhum produto encontrado com esses filtros.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
