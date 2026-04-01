const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-xl font-bold text-background">
          BRASIL<span className="text-primary">2026</span>
        </span>
        <div className="flex gap-6">
          {["Coleção", "Custom Lab", "Avaliações", "Contato"].map((link) => (
            <a key={link} href="#" className="text-sm text-background/60 hover:text-background transition-colors">
              {link}
            </a>
          ))}
        </div>
        <p className="text-sm text-background/40">© 2026 Brasil2026. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
