
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Paula",
      photo: "https://i.pravatar.cc/150?img=1",
      text: "Trabalho impecável! Minhas unhas nunca ficaram tão bonitas e o atendimento é sempre muito atencioso. Recomendo muito!",
      stars: 5
    },
    {
      name: "Carla Mendes",
      photo: "https://i.pravatar.cc/150?img=5",
      text: "Profissional dedicada e com uma criatividade incrível. Faço minhas unhas há mais de um ano e nunca me decepcionou.",
      stars: 5
    },
    {
      name: "Fernanda Costa",
      photo: "https://i.pravatar.cc/150?img=9",
      text: "Atendimento excelente, ambiente aconchegante e resultados que duram. Adoro a atenção aos detalhes no nail art.",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Depoimentos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que minhas clientes dizem sobre meu trabalho e atendimento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card bg-card rounded-lg p-6 shadow-sm transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.photo} 
                  alt={`Foto de ${testimonial.name}`}
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <div className="flex">
                    {Array(testimonial.stars).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
