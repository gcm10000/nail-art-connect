
import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=600",
      alt: "Manicure elegante com esmalte rosa"
    },
    {
      src: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=600",
      alt: "Nail art com detalhes florais"
    },
    {
      src: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=600",
      alt: "Unhas decoradas com efeito mármore"
    },
    {
      src: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?q=80&w=600",
      alt: "Pedicure com esmalte vermelho"
    },
    {
      src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=600",
      alt: "Nail art geométrica minimalista"
    },
    {
      src: "https://images.unsplash.com/photo-1607779097040-8c338a16f493?q=80&w=600",
      alt: "Unhas em gel com glitter"
    }
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeria de Trabalhos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça um pouco do meu trabalho através desta seleção de designs e estilos que criei para minhas clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item overflow-hidden rounded-lg shadow-md group">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300"
              />
              <div className="p-4 bg-card">
                <p className="text-sm text-muted-foreground">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
