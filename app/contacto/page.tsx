'use client';

import { useState } from 'react';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import WhatsappCTA from '@/app/components/WhatsappCTA';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    rfc: '',
    email: '',
    telefono: '',
    tipoCliente: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      alert('¡Gracias por contactarnos! Te responderemos pronto.');
      setFormData({
        nombre: '',
        rfc: '',
        email: '',
        telefono: '',
        tipoCliente: '',
        mensaje: ''
      });
    }, 1000);
  };

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Contacto' }
  ];

  return (
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-gray mb-4">
            Contacto
          </h1>
          <p className="text-xl text-gray-600">
            Estamos aquí para ayudarte con tus necesidades contables y fiscales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario de contacto */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-text-gray mb-6">
              Envíanos un mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-text-gray mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="rfc" className="block text-sm font-medium text-text-gray mb-2">
                    RFC (opcional)
                  </label>
                  <input
                    type="text"
                    id="rfc"
                    name="rfc"
                    value={formData.rfc}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Ej. ABCD850101XX1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-gray mb-2">
                    Correo electrónico (opcional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-text-gray mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="+52 81 1234 5678"
                  />
                </div>
                
                <div>
                  <label htmlFor="tipoCliente" className="block text-sm font-medium text-text-gray mb-2">
                    Tipo de cliente
                  </label>
                  <select
                    id="tipoCliente"
                    name="tipoCliente"
                    value={formData.tipoCliente}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="persona">Persona física</option>
                    <option value="empresa">Empresa</option>
                    <option value="no-se">No estoy seguro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-text-gray mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            {/* Datos de contacto */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-text-gray mb-6">
                Información de contacto
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-text-gray">Teléfono</p>
                    <p className="text-gray-600">+52 81 2110 2005</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-text-gray">Correo electrónico</p>
                    <p className="text-gray-600">contacto@rea.com.mx</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-text-gray">Ubicación</p>
                    <p className="text-gray-600">Monterrey, Nuevo León, México</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-text-gray">Horario de atención</p>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-accent text-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">
                ¿Necesitas ayuda inmediata?
              </h3>
              <p className="mb-6 text-green-100">
                Contáctanos por WhatsApp para una respuesta más rápida
              </p>
              <WhatsappCTA className="bg-white text-accent hover:bg-gray-100" />
            </div>

            {/* Mapa estático */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-text-gray mb-4">
                Nuestra ubicación
              </h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Mapa de Monterrey, N.L.</p>
                  <p className="text-sm">Próximamente disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
