export interface Service {
  slug: string;
  title: string;
  summary: string;
  price: number;
  oldPrice?: number;
  category: string;
  audience: 'Persona' | 'Empresa' | 'Ambos';
  features: string[];
  faqs: FAQ[];
  description: string;
  requirements: string[];
  process: string[];
  timesAndCosts: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'tramites-sat',
    name: 'Trámites SAT',
    description: 'Servicios relacionados con el SAT'
  },
  {
    id: 'facturacion-nomina',
    name: 'Facturación & Nómina',
    description: 'Facturación electrónica y nómina'
  },
  {
    id: 'capacitacion',
    name: 'Capacitación',
    description: 'Cursos y capacitación contable'
  },
  {
    id: 'planeacion-fiscal',
    name: 'Planeación fiscal',
    description: 'Asesoría fiscal y planeación'
  },
  {
    id: 'contabilidad',
    name: 'Contabilidad',
    description: 'Servicios contables generales'
  }
];

export const services: Service[] = [
  {
    slug: 'tramites-sat-rfc-efirma-buzon',
    title: 'Trámites ante el SAT (RFC, e.firma, Buzón)',
    summary: 'Alta/modificación de RFC, generación/renovación de e.firma y configuración de Buzón Tributario.',
    price: 300,
    category: 'Trámites SAT',
    audience: 'Ambos',
    features: [
      'Asesoría para alta o actualización en RFC',
      'Generación o renovación de e.firma',
      'Configuración de Buzón Tributario',
      'Acompañamiento remoto paso a paso'
    ],
    faqs: [
      {
        question: '¿Cuánto tiempo toma obtener la e.firma?',
        answer: 'El proceso completo puede tomar entre 3 a 5 días hábiles, dependiendo de la documentación proporcionada.'
      },
      {
        question: '¿Necesito ir presencialmente al SAT?',
        answer: 'No, todo el proceso se puede realizar de manera remota con nuestro acompañamiento.'
      }
    ],
    description: 'Te ayudamos con todos los trámites esenciales ante el SAT para que puedas operar legalmente. Incluye alta o actualización de RFC, obtención de e.firma y configuración del Buzón Tributario.',
    requirements: [
      'CURP',
      'Comprobante de domicilio',
      'Identificación oficial',
      'Acta de nacimiento'
    ],
    process: [
      'Revisión de documentación',
      'Llenado de formularios',
      'Solicitud de citas',
      'Seguimiento del proceso',
      'Entrega de documentos'
    ],
    timesAndCosts: [
      'Tiempo estimado: 3-5 días hábiles',
      'Costo: $300 MXN',
      'Incluye seguimiento completo',
      'Sin costos adicionales'
    ]
  },
  {
    slug: 'facturacion-electronica-y-nomina',
    title: 'Facturación electrónica y nómina',
    summary: 'Implementación y operación de CFDI, nómina timbrada y reportes.',
    price: 1000,
    category: 'Facturación & Nómina',
    audience: 'Empresa',
    features: [
      'Alta de certificados y PAC',
      'Plantillas CFDI 4.0',
      'Nómina timbrada y reportes',
      'Capacitación básica al equipo'
    ],
    faqs: [
      {
        question: '¿Qué incluye la implementación?',
        answer: 'Incluye configuración de certificados, plantillas de facturación, capacitación del equipo y seguimiento por 30 días.'
      },
      {
        question: '¿Puedo usar mi propio PAC?',
        answer: 'Sí, podemos trabajar con tu PAC actual o recomendarte uno según tus necesidades.'
      }
    ],
    description: 'Implementamos completamente tu sistema de facturación electrónica y nómina timbrada, asegurando el cumplimiento con las obligaciones fiscales.',
    requirements: [
      'RFC de la empresa',
      'e.firma vigente',
      'Certificado de sello digital',
      'Datos de empleados'
    ],
    process: [
      'Análisis de necesidades',
      'Configuración de certificados',
      'Creación de plantillas',
      'Capacitación del equipo',
      'Pruebas y validación'
    ],
    timesAndCosts: [
      'Tiempo estimado: 1-2 semanas',
      'Costo: $1,000 MXN',
      'Incluye capacitación',
      'Seguimiento por 30 días'
    ]
  },
  {
    slug: 'capacitacion-basica-contabilidad',
    title: 'Capacitación básica en contabilidad',
    summary: 'Curso práctico para llevar impuestos y obligaciones esenciales.',
    price: 3500,
    oldPrice: 5000,
    category: 'Capacitación',
    audience: 'Ambos',
    features: [
      'Conceptos clave de contabilidad',
      'Obligaciones fiscales frecuentes',
      'Herramientas y prácticas recomendadas',
      'Sesión de dudas en vivo'
    ],
    faqs: [
      {
        question: '¿Es presencial o en línea?',
        answer: 'El curso se imparte en línea con sesiones en vivo y material descargable.'
      },
      {
        question: '¿Qué nivel de conocimiento necesito?',
        answer: 'No necesitas conocimientos previos, el curso está diseñado para principiantes.'
      }
    ],
    description: 'Aprende los fundamentos de la contabilidad y las obligaciones fiscales de manera práctica y sencilla.',
    requirements: [
      'Computadora con internet',
      'Disponibilidad de 4 horas',
      'Documentos fiscales básicos'
    ],
    process: [
      'Registro y acceso a plataforma',
      'Módulos de aprendizaje',
      'Ejercicios prácticos',
      'Sesión de dudas',
      'Certificado de participación'
    ],
    timesAndCosts: [
      'Duración: 4 horas',
      'Costo: $3,500 MXN (antes $5,000)',
      'Incluye material descargable',
      'Certificado incluido'
    ]
  },
  {
    slug: 'asesoria-resico-rif',
    title: 'Asesoría para RESICO y RIF',
    summary: 'Evaluación y migración de régimen, simulación de impuestos y cumplimiento.',
    price: 1000,
    oldPrice: 1500,
    category: 'Planeación fiscal',
    audience: 'Persona',
    features: [
      'Diagnóstico de régimen actual',
      'Simulación de impuestos',
      'Guía de migración',
      'Checklist de cumplimiento'
    ],
    faqs: [
      {
        question: '¿Cuándo puedo cambiar de régimen?',
        answer: 'El cambio de régimen se puede realizar en enero de cada año, con algunas excepciones.'
      },
      {
        question: '¿Qué régimen me conviene más?',
        answer: 'Depende de tus ingresos y tipo de actividad, te ayudamos a evaluar la mejor opción.'
      }
    ],
    description: 'Te ayudamos a evaluar si RESICO o RIF es mejor para tu situación fiscal y te guiamos en el proceso de migración.',
    requirements: [
      'Estados financieros del año anterior',
      'Comprobantes de ingresos',
      'Información de gastos',
      'RFC vigente'
    ],
    process: [
      'Análisis de situación actual',
      'Simulación de escenarios',
      'Recomendación de régimen',
      'Plan de migración',
      'Seguimiento de cumplimiento'
    ],
    timesAndCosts: [
      'Tiempo estimado: 1 semana',
      'Costo: $1,000 MXN (antes $1,500)',
      'Incluye simulación',
      'Seguimiento por 3 meses'
    ]
  },
  {
    slug: 'regularizaciones-y-actualizacion',
    title: 'Regularizaciones y actualización',
    summary: 'Ponte al día: obligaciones pendientes, declaraciones omitidas y aclaraciones.',
    price: 500,
    oldPrice: 800,
    category: 'Trámites SAT',
    audience: 'Ambos',
    features: [
      'Revisión de estatus fiscal',
      'Presentación de pendientes',
      'Aclaraciones ante SAT',
      'Plan de acción y seguimiento'
    ],
    faqs: [
      {
        question: '¿Qué pasa si tengo declaraciones pendientes?',
        answer: 'Te ayudamos a presentar todas las declaraciones pendientes y regularizar tu situación fiscal.'
      },
      {
        question: '¿Hay multas por declaraciones tardías?',
        answer: 'Sí, pero podemos ayudarte a minimizar las multas y regularizar tu situación.'
      }
    ],
    description: 'Te ayudamos a regularizar tu situación fiscal y ponerte al día con todas las obligaciones pendientes.',
    requirements: [
      'RFC vigente',
      'Documentos fiscales históricos',
      'Comprobantes de ingresos',
      'Información de gastos'
    ],
    process: [
      'Auditoría de situación fiscal',
      'Identificación de pendientes',
      'Elaboración de declaraciones',
      'Presentación ante SAT',
      'Seguimiento de resultados'
    ],
    timesAndCosts: [
      'Tiempo estimado: 2-3 semanas',
      'Costo: $500 MXN (antes $800)',
      'Incluye presentación',
      'Seguimiento por 6 meses'
    ]
  },
  {
    slug: 'contabilidad-mensual-y-anual',
    title: 'Contabilidad mensual y anual',
    summary: 'Llevado contable mensual, declaraciones y cierre anual.',
    price: 1000,
    category: 'Contabilidad',
    audience: 'Empresa',
    features: [
      'Pólizas y conciliaciones',
      'Declaraciones mensuales',
      'Cierre y anual',
      'Reportes ejecutivos'
    ],
    faqs: [
      {
        question: '¿Qué incluye el servicio mensual?',
        answer: 'Incluye registro de operaciones, conciliaciones bancarias, declaraciones mensuales y reportes.'
      },
      {
        question: '¿Puedo acceder a mis reportes en línea?',
        answer: 'Sí, tienes acceso a una plataforma donde puedes ver todos tus reportes y estados financieros.'
      }
    ],
    description: 'Servicio completo de contabilidad mensual y anual para mantener tu empresa al día con todas las obligaciones fiscales.',
    requirements: [
      'RFC de la empresa',
      'Documentos contables',
      'Comprobantes bancarios',
      'Facturas y recibos'
    ],
    process: [
      'Recopilación de documentos',
      'Registro contable',
      'Conciliaciones',
      'Declaraciones mensuales',
      'Cierre anual'
    ],
    timesAndCosts: [
      'Servicio mensual: $1,000 MXN',
      'Cierre anual: $2,000 MXN',
      'Incluye reportes',
      'Acceso a plataforma'
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter(service => service.category === category);
}

export function getServicesByAudience(audience: string): Service[] {
  return services.filter(service => service.audience === audience || service.audience === 'Ambos');
}

export function searchServices(query: string): Service[] {
  const lowercaseQuery = query.toLowerCase();
  return services.filter(service => 
    service.title.toLowerCase().includes(lowercaseQuery) ||
    service.summary.toLowerCase().includes(lowercaseQuery) ||
    service.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
}
