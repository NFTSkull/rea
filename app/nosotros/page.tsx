import Breadcrumbs from '@/app/components/Breadcrumbs';
import WhatsappCTA from '@/app/components/WhatsappCTA';
import { Users, Target, Award, Heart } from 'lucide-react';

export default function NosotrosPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Compromiso',
      description: 'Nos comprometemos a brindar servicios de calidad y cumplir con todas las obligaciones fiscales de nuestros clientes.'
    },
    {
      icon: Award,
      title: 'Experiencia',
      description: 'Más de 5 años de experiencia ayudando a personas y empresas a regularizar su situación fiscal.'
    },
    {
      icon: Heart,
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en la confianza, transparencia y honestidad.'
    }
  ];

  const team = [
    {
      name: 'María Elena Rodríguez',
      role: 'Contadora Pública',
      experience: '8 años de experiencia',
      specialties: ['Trámites SAT', 'Facturación Electrónica', 'Planeación Fiscal']
    },
    {
      name: 'Carlos Alberto González',
      role: 'Especialista en Nómina',
      experience: '6 años de experiencia',
      specialties: ['Nómina Timbrada', 'CFDI', 'Reportes Fiscales']
    },
    {
      name: 'Ana Patricia López',
      role: 'Asesora Fiscal',
      experience: '5 años de experiencia',
      specialties: ['RESICO', 'RIF', 'Regularizaciones']
    }
  ];

  return (
    <div className="min-h-screen bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-gray mb-4">
            Nosotros
          </h1>
          <p className="text-xl text-gray-600">
            Conoce al equipo que está comprometido con tu éxito fiscal
          </p>
        </div>

        {/* Hero Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary text-white rounded-full mb-6">
              <Users className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold text-text-gray mb-4">
              REA Despacho Contable
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos un despacho contable especializado en brindar soluciones integrales 
              para personas físicas y empresas que buscan cumplir con sus obligaciones 
              fiscales de manera eficiente y transparente.
            </p>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h3 className="text-2xl font-semibold text-text-gray mb-4">
              Nuestra Misión
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Facilitar el cumplimiento de las obligaciones fiscales de nuestros clientes 
              mediante servicios profesionales, personalizados y eficientes, contribuyendo 
              al crecimiento y estabilidad de sus negocios y actividades económicas.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h3 className="text-2xl font-semibold text-text-gray mb-4">
              Nuestra Visión
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ser el despacho contable de referencia en Monterrey, reconocido por nuestra 
              excelencia en el servicio, innovación tecnológica y compromiso con el éxito 
              de nuestros clientes en el cumplimiento fiscal.
            </p>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-gray mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-gray mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Equipo */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-gray mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600">
              Profesionales certificados con amplia experiencia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-gray mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {member.experience}
                </p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, i) => (
                    <span key={i} className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mr-1 mb-1">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Estadísticas */}
        <section className="bg-primary text-white rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Nuestros Logros
            </h2>
            <p className="text-xl text-blue-100">
              Números que respaldan nuestra experiencia
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Clientes satisfechos</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <p className="text-blue-100">Años de experiencia</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-100">Cumplimiento SAT</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Soporte disponible</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-text-gray mb-4">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte
          </p>
          <WhatsappCTA className="btn-accent" />
        </section>
      </div>
    </div>
  );
}
