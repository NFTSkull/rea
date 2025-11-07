'use client';

import { useState } from 'react';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import PromoCarousel from '@/app/components/PromoCarousel';
import WhatsappCTA from '@/app/components/WhatsappCTA';
import Link from 'next/link';

export default function TramitesYServiciosPage() {
  const [selectedRegimen, setSelectedRegimen] = useState<string | null>(null);
  const [selectedCita, setSelectedCita] = useState<string | null>(null);

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Trámites y servicios' }
  ];

  const rfcCards = [
    {
      id: 'rfc-persona-fisica',
      title: 'Persona física',
      items: [
        '✓ Actualización de Obligaciones',
        '✓ Cambios de Domicilio',
        '✓ Suspensión de Actividades',
        '✓ Reanudación de Actividades',
        '✓ Cambio de régimen.',
        '✓ Renovación E. Firma',
        '✓ Generación de Sellos Digitales'
      ]
    },
    {
      id: 'rfc-persona-moral',
      title: 'Persona Moral',
      items: [
        '✓ Actualización de Obligaciones',
        '✓ Cambios de Domicilio',
        '✓ Suspensión de Actividades',
        '✓ Reanudación de Actividades',
        '✓ Cambio de régimen.',
        '✓ Renovación E. Firma',
        '✓ Generación de Sellos Digitales'
      ]
    }
  ];

  const regimenOptions = [
    { id: 'regimen-persona-fisica', title: 'Persona física' },
    { id: 'regimen-persona-moral', title: 'Persona moral' },
    { id: 'regimen-no-seguro', title: 'No estoy seguro' }
  ];

  const citasOptions = [
    'e.firma de Personas Físicas',
    'e.firma Renovación Personas Físicas',
    'Actualizaciones al RFC Personas Físicas',
    'Inscripción al RFC Persona física',
    'Inscripción al RFC Persona Moral',
    'e.firma de Persona Moral',
    'e.firma Renovación Persona Moral',
    'Actualizaciones al RFC Personas Moral',
    'Corrección o incorporación de CURP',
    'Otras Citas'
  ];

  const adeudosOptions = [
    'Personas físicas',
    'Personas Morales'
  ];

  const imssOptions = [
    'Alta patronal',
    'Análisis de prima',
    'Alta de Trabajadores',
    'Semanas Cotizadas',
    'Activación de buzón',
    'Líneas de Captura',
    'Tramite Modalidad 10'
  ];

  const repseOptions = [
    'Inscripción REPSE',
    'Informativa ICSOE',
    'Informativa SISUB',
    'Corrección de Actividades'
  ];

  const masServicios = [
    'Capacitación',
    'Contabilidad Integral',
    'Análisis de Régimen',
    'Capacitación Personalizada',
    'Nomina',
    'Elaboración de Facturas',
    'Declaración Patrimonial'
  ];

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="container-custom section-padding">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Trámites y servicios
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Encuentra el servicio que necesitas para cumplir con tus obligaciones fiscales
          </p>
        </div>

        <div className="mb-16">
          <PromoCarousel />
        </div>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Trámites al RFC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rfcCards.map(card => (
              <div key={card.id} className="card">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  {card.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="card-elevated">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Declaraciones para personas
            </h2>
            <p className="text-text-secondary">
              Presentación de declaraciones mensuales y anuales.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Selecciona Tu Régimen o Tus Regímenes Fiscales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regimenOptions.map(option => (
              <button
                key={option.id}
                onClick={() => setSelectedRegimen(option.id)}
                className={`card text-left transition-all duration-200 ${
                  selectedRegimen === option.id ? 'border-accent-500 shadow-medium' : ''
                }`}
              >
                <span className="text-lg font-semibold text-text-primary">
                  {option.title}
                </span>
              </button>
            ))}
          </div>
          {selectedRegimen && (
            <div className="mt-6 flex justify-center">
              <Link href="/contacto" className="btn-primary">
                Enviar formulario
              </Link>
            </div>
          )}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Citas SAT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {citasOptions.map(option => (
              <button
                key={option}
                onClick={() => setSelectedCita(option)}
                className={`card text-left transition-all duration-200 ${
                  selectedCita === option ? 'border-accent-500 shadow-medium' : ''
                }`}
              >
                <span className="text-lg font-semibold text-text-primary">
                  {option}
                </span>
              </button>
            ))}
          </div>
          {selectedCita && (
            <div className="mt-6 flex justify-center">
              <Link href="/contacto" className="btn-primary">
                Enviar formulario
              </Link>
            </div>
          )}
        </section>

        <section className="mb-16">
          <div className="card-elevated">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Factura electrónica
            </h2>
            <p className="text-text-secondary mb-6">
              Implementación de CFDI 4.0 y facturación.
            </p>
            <Link href="/contacto" className="btn-primary w-full sm:w-auto">
              Enviar formulario
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Adeudos fiscales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {adeudosOptions.map(option => (
              <div key={option} className="card">
                <h3 className="text-xl font-semibold text-text-primary">
                  {option}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Declaraciones para empresas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Declaraciones para empresas
              </h3>
              <p className="text-text-secondary">
                Presentación de declaraciones empresariales.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-text-primary">
                No estoy seguro
              </h3>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Trámites IMSS
          </h2>
          <div className="card">
            <ul className="space-y-2 text-text-secondary">
              {imssOptions.map(item => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Trámite REPSE
          </h2>
          <div className="card">
            <ul className="space-y-2 text-text-secondary">
              {repseOptions.map(item => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <div className="card-elevated text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Saldos a favor
            </h2>
            <p className="text-text-secondary">
              Te ayudamos a Recuperar tu Saldo a Favor.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-8 text-center">
            Más trámites y servicios
          </h2>
          <div className="card">
            <ul className="space-y-2 text-text-secondary">
              {masServicios.map(item => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <div className="card">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Cursos
            </h2>
            <p className="text-text-secondary">
              Curso práctico para llevar impuestos y obligaciones esenciales.
            </p>
          </div>
        </section>

        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            ¿Necesitas asesoría personalizada?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Nuestros expertos están listos para ayudarte con cualquier trámite o consulta fiscal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsappCTA className="btn-accent" />
            <Link href="/contacto" className="btn-secondary">
              Agendar consulta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
