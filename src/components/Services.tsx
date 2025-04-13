
import React from 'react';
import { Sparkles, Scissors, Paint, Gem } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="h-10 w-10 text-primary" />,
      name: "Manicure",
      description: "Cuidado completo para suas mãos, incluindo modelagem, cutículas e esmalte de sua preferência.",
      price: "A partir de R$50"
    },
    {
      icon: <Paint className="h-10 w-10 text-primary" />,
      name: "Pedicure",
      description: "Tratamento especializado para os pés, com esfoliação, hidratação e esmaltação perfeita.",
      price: "A partir de R$60"
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      name: "Nail Art",
      description: "Designs exclusivos e decorações artísticas para suas unhas, desde detalhes simples até criações elaboradas.",
      price: "A partir de R$25"
    },
    {
      icon: <Gem className="h-10 w-10 text-primary" />,
      name: "Unhas em Gel",
      description: "Alongamento e fortalecimento com técnica de gel, proporcionando durabilidade e beleza por semanas.",
      price: "A partir de R$120"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma variedade de tratamentos para mãos e pés, 
            focados na beleza e saúde de suas unhas com produtos de alta qualidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-card rounded-lg p-6 shadow-sm transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
              <p className="font-medium text-primary">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
