
import React, { useState } from 'react';
import { Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  // Here you would put your own WhatsApp number
  const whatsappNumber = "5511999999999"; 
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create string with key-value pairs
    const messageText = `
*Nova mensagem do site*
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Mensagem: ${formData.message}
    `;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(messageText);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Show success toast
    toast({
      title: "Mensagem preparada!",
      description: "Você será redirecionado para o WhatsApp para enviar sua mensagem.",
      duration: 5000,
    });
    
    // Small delay before opening WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Agende seu horário ou tire suas dúvidas. Será um prazer atendê-la(o)!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-medium mb-1">Telefone</h3>
                <p className="text-muted-foreground">(11) 99999-9999</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-muted-foreground">contato@nailartista.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-medium mb-1">Endereço</h3>
                <p className="text-muted-foreground">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefone</label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Serviço</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Selecione o serviço</option>
                    <option value="Manicure">Manicure</option>
                    <option value="Pedicure">Pedicure</option>
                    <option value="Unhas em Gel">Unhas em Gel</option>
                    <option value="Nail Art">Nail Art</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Como posso ajudar?"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" /> Preparando WhatsApp
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
