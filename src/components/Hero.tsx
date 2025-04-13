
import React from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2000')] bg-cover bg-center opacity-40" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="block">Arte em suas Mãos</span>
          <span className="block mt-2 text-primary">Especialista em Nail Art</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
          Transformando unhas em pequenas obras de arte. Especialista em manicure, pedicure e
          nail art exclusiva para destacar sua beleza.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Agendar Horário
          </a>
          <a 
            href="#services" 
            className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-primary hover:bg-primary/10 transition-colors"
          >
            Ver Serviços
          </a>
        </div>
      </div>
      
      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDownCircle size={36} />
      </a>
    </section>
  );
};

export default Hero;
