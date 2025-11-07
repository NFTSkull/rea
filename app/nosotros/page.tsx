import Breadcrumbs from '@/app/components/Breadcrumbs';
import WhatsappCTA from '@/app/components/WhatsappCTA';
import { Users } from 'lucide-react';

export default function NosotrosPage() {
  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros' }
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="container-custom section-padding">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Nosotros
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Conoce a El Conta REA, tu aliado contable con soluciones claras, confiables y personalizadas.
          </p>
        </div>

        <section className="card-elevated mb-12 text-center">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-500/10 text-accent-600 rounded-full mb-6">
              <Users className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              El Conta REA
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              El Conta REA somos un despacho contable comprometido con brindar soluciones claras, confiables y personalizadas para cada cliente. Acompañamos a personas físicas y empresas en su camino hacia el cumplimiento fiscal, con un enfoque transparente, eficiente y alineado a sus objetivos financieros.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="card">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Misión
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Acompañar a cada cliente en el cumplimiento de sus responsabilidades fiscales, brindando soluciones contables claras, eficientes y adaptadas a sus necesidades. Trabajamos para fortalecer la estabilidad financiera y el desarrollo sostenible de sus negocios.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Visión
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Consolidarnos como despacho contable de referencia a nivel nacional, reconocido por la excelencia de nuestros servicios, el uso de tecnología innovadora y nuestro firme compromiso con el éxito fiscal de nuestros clientes. Aspiramos a ser un aliado estratégico en el desarrollo sostenible de sus negocios, garantizando cumplimiento normativo, eficiencia operativa y confianza profesional.
            </p>
          </div>
        </section>

        <section className="card-elevated mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Operamos de manera 100% en línea, manteniendo una comunicación constante con nuestros clientes a través de reuniones virtuales, conferencias o el medio que mejor se adapte a sus necesidades. Nuestro enfoque flexible garantiza atención personalizada, eficiencia y cercanía, sin importar la ubicación.
          </p>
        </section>

        <section className="card mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 text-center">
            Nuestro equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-primary border border-border-light rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                L.C.P. Raúl Espinoza Acuña
              </h3>
              <p className="text-sm text-text-tertiary mb-4">
                6 Años de experiencia. Planeación Fiscal, Regularizaciones, Tramites SAT
              </p>
            </div>
            <div className="bg-bg-primary border border-border-light rounded-xl p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                L.C.P. Rocio Pino Lezma
              </h3>
              <p className="text-sm text-text-tertiary mb-4">
                9 Años de Experiencia. Nómina Timbrada, Reportes Fiscales, Trámites IMSS
              </p>
            </div>
          </div>
        </section>

        <section className="card text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Cursos
          </h2>
          <p className="text-text-secondary">
            Curso práctico para llevar impuestos y obligaciones esenciales.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte.
          </p>
          <WhatsappCTA className="btn-accent" />
        </section>
      </div>
    </div>
  );
}
