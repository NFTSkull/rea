import Breadcrumbs from '@/app/components/Breadcrumbs';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

export default function AvisoDePrivacidadPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Aviso de Privacidad' }
  ];

  const sections = [
    {
      icon: Eye,
      title: 'Información que recopilamos',
      content: [
        'Datos personales: nombre completo, dirección, teléfono, correo electrónico',
        'Información fiscal: RFC, CURP, comprobantes de domicilio',
        'Información financiera: estados de cuenta, comprobantes de ingresos y gastos',
        'Información de contacto: preferencias de comunicación'
      ]
    },
    {
      icon: Shield,
      title: 'Uso de la información',
      content: [
        'Proporcionar servicios contables y fiscales',
        'Cumplir con obligaciones legales y regulatorias',
        'Comunicarnos contigo sobre nuestros servicios',
        'Mejorar la calidad de nuestros servicios'
      ]
    },
    {
      icon: Lock,
      title: 'Protección de datos',
      content: [
        'Implementamos medidas de seguridad técnicas y administrativas',
        'Limitamos el acceso a tu información solo al personal autorizado',
        'Utilizamos encriptación para proteger datos sensibles',
        'Realizamos auditorías regulares de seguridad'
      ]
    },
    {
      icon: FileText,
      title: 'Tus derechos',
      content: [
        'Acceder a tu información personal',
        'Rectificar datos inexactos o incompletos',
        'Cancelar el tratamiento de tus datos',
        'Oponerte al tratamiento de tus datos para fines específicos'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-gray mb-4">
            Aviso de Privacidad
          </h1>
          <p className="text-xl text-gray-600">
            Información sobre el tratamiento de tus datos personales
          </p>
        </div>

        {/* Introducción */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
              <Shield className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-semibold text-text-gray mb-4">
              Compromiso con tu privacidad
            </h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            En REA Despacho Contable, nos comprometemos a proteger tu información personal 
            y cumplir con todas las disposiciones de la Ley Federal de Protección de Datos 
            Personales en Posesión de los Particulares.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            Este aviso describe cómo recopilamos, utilizamos, almacenamos y protegemos 
            tu información personal cuando utilizas nuestros servicios.
          </p>
        </div>

        {/* Secciones principales */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-gray mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Información de contacto */}
        <div className="bg-gray-50 rounded-lg p-8 mt-8">
          <h3 className="text-xl font-semibold text-text-gray mb-4">
            Contacto para asuntos de privacidad
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 mb-2">
                <strong>Responsable:</strong> REA Despacho Contable
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Correo:</strong> privacidad@rea.com.mx
              </p>
              <p className="text-gray-600">
                <strong>Teléfono:</strong> +52 81 2110 2005
              </p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">
                <strong>Dirección:</strong> Monterrey, Nuevo León, México
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Horario:</strong> Lunes a Viernes 9:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        {/* Actualizaciones */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mt-8">
          <h3 className="text-xl font-semibold text-text-gray mb-4">
            Actualizaciones del aviso
          </h3>
          <p className="text-gray-600 mb-4">
            Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. 
            Te notificaremos sobre cambios significativos a través de nuestro sitio web o por correo electrónico.
          </p>
          <p className="text-sm text-gray-500">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-MX')}
          </p>
        </div>
      </div>
    </div>
  );
}
