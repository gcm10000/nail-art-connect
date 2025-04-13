
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary rounded-lg" />
            <img 
              src="https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=800" 
              alt="Profissional de manicure trabalhando"
              className="rounded-lg shadow-lg w-full h-auto object-cover relative z-10"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mim</h2>
            
            <h3 className="text-xl font-semibold mb-2 text-primary">Olá, sou Maria Silva</h3>
            
            <p className="text-muted-foreground mb-4">
              Especialista em manicure e pedicure com mais de 8 anos de experiência no mercado de beleza.
              Minha paixão por unhas começou ainda na adolescência e se transformou em minha profissão.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Sou certificada em técnicas avançadas de nail art e alongamento, sempre me atualizando 
              com as últimas tendências e técnicas do mercado. Meu objetivo é proporcionar às minhas 
              clientes não apenas unhas bonitas, mas uma experiência completa de bem-estar e autoestima.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="font-semibold w-32">Especialidades:</span>
                <span>Nail Art, Unhas em Gel, Decoração 3D</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-32">Experiência:</span>
                <span>8+ anos</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold w-32">Certificações:</span>
                <span>Técnica em Alongamento, Design de Unhas, Nail Art Avançada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
