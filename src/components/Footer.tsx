
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NailArtista</h3>
            <p className="text-muted-foreground mb-4">
              Transformando unhas em pequenas obras de arte.
              Especialista em manicure, pedicure e nail art.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors">Início</a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Segunda - Sexta</span>
                <span>9h às 19h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Sábado</span>
                <span>9h às 17h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Domingo</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NailArtista. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
