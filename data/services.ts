type Audience = 'Persona' | 'Empresa' | 'Ambos';
type Category = 'Trámites SAT' | 'Facturación & Nómina' | 'Capacitación' | 'Planeación fiscal' | 'Contabilidad';

export interface Service {
  slug: string;
  title: string;
  summary: string;
  price: number;
  oldPrice?: number;
  category: Category;
  audience: Audience;
  features: string[];
  requisitos?: string[];
  proceso?: string[];
  tiempos?: string[];
  faqs?: { q: string; a: string }[];
}

export interface CategoryInfo {
  id: string;
  name: Category;
  description: string;
}

export const categories: CategoryInfo[] = [
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
    title: 'Trámites ante el SAT (RFC, e.firma, buzón)',
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
    requisitos: [
      'CURP',
      'Comprobante de domicilio',
      'Identificación oficial',
      'Acta de nacimiento'
    ],
    proceso: [
      'Revisión de documentación',
      'Llenado de formularios',
      'Solicitud de citas',
      'Seguimiento del proceso',
      'Entrega de documentos'
    ],
    tiempos: [
      'Tiempo estimado: 3-5 días hábiles',
      'Costo: $300 MXN',
      'Incluye seguimiento completo',
      'Sin costos adicionales'
    ],
    faqs: [
      {
        q: '¿Cuánto tiempo toma obtener la e.firma?',
        a: 'El proceso completo puede tomar entre 3 a 5 días hábiles, dependiendo de la documentación proporcionada.'
      },
      {
        q: '¿Necesito ir presencialmente al SAT?',
        a: 'No, todo el proceso se puede realizar de manera remota con nuestro acompañamiento.'
      }
    ]
  },
  {
    slug: 'facturacion-electronica-y-nomina',
    title: 'Facturación electrónica y nómina',
    summary: 'Implementación y operación de CFDI 4.0 y nómina timbrada.',
    price: 1000,
    category: 'Facturación & Nómina',
    audience: 'Empresa',
    features: [
      'Alta de certificados y PAC',
      'Plantillas CFDI 4.0',
      'Nómina timbrada y reportes',
      'Capacitación básica al equipo'
    ],
    requisitos: [
      'RFC de la empresa',
      'e.firma vigente',
      'Certificado de sello digital',
      'Datos de empleados'
    ],
    proceso: [
      'Análisis de necesidades',
      'Configuración de certificados',
      'Creación de plantillas',
      'Capacitación del equipo',
      'Pruebas y validación'
    ],
    tiempos: [
      'Tiempo estimado: 1-2 semanas',
      'Costo: $1,000 MXN',
      'Incluye capacitación',
      'Seguimiento por 30 días'
    ],
    faqs: [
      {
        q: '¿Qué incluye la implementación?',
        a: 'Incluye configuración de certificados, plantillas de facturación, capacitación del equipo y seguimiento por 30 días.'
      },
      {
        q: '¿Puedo usar mi propio PAC?',
        a: 'Sí, podemos trabajar con tu PAC actual o recomendarte uno según tus necesidades.'
      }
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
      'Herramientas y mejores prácticas',
      'Sesión de dudas en vivo'
    ],
    requisitos: [
      'Computadora con internet',
      'Disponibilidad de 4 horas',
      'Documentos fiscales básicos'
    ],
    proceso: [
      'Registro y acceso a plataforma',
      'Módulos de aprendizaje',
      'Ejercicios prácticos',
      'Sesión de dudas',
      'Certificado de participación'
    ],
    tiempos: [
      'Duración: 4 horas',
      'Costo: $3,500 MXN (antes $5,000)',
      'Incluye material descargable',
      'Certificado incluido'
    ],
    faqs: [
      {
        q: '¿Es presencial o en línea?',
        a: 'El curso se imparte en línea con sesiones en vivo y material descargable.'
      },
      {
        q: '¿Qué nivel de conocimiento necesito?',
        a: 'No necesitas conocimientos previos, el curso está diseñado para principiantes.'
      }
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
    requisitos: [
      'Estados financieros del año anterior',
      'Comprobantes de ingresos',
      'Información de gastos',
      'RFC vigente'
    ],
    proceso: [
      'Análisis de situación actual',
      'Simulación de escenarios',
      'Recomendación de régimen',
      'Plan de migración',
      'Seguimiento de cumplimiento'
    ],
    tiempos: [
      'Tiempo estimado: 1 semana',
      'Costo: $1,000 MXN (antes $1,500)',
      'Incluye simulación',
      'Seguimiento por 3 meses'
    ],
    faqs: [
      {
        q: '¿Cuándo puedo cambiar de régimen?',
        a: 'El cambio de régimen se puede realizar en enero de cada año, con algunas excepciones.'
      },
      {
        q: '¿Qué régimen me conviene más?',
        a: 'Depende de tus ingresos y tipo de actividad, te ayudamos a evaluar la mejor opción.'
      }
    ]
  },
  {
    slug: 'regularizaciones-y-actualizacion',
    title: 'Regularizaciones y actualización',
    summary: 'Obligaciones pendientes, declaraciones omitidas y aclaraciones.',
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
    requisitos: [
      'RFC vigente',
      'Documentos fiscales históricos',
      'Comprobantes de ingresos',
      'Información de gastos'
    ],
    proceso: [
      'Auditoría de situación fiscal',
      'Identificación de pendientes',
      'Elaboración de declaraciones',
      'Presentación ante SAT',
      'Seguimiento de resultados'
    ],
    tiempos: [
      'Tiempo estimado: 2-3 semanas',
      'Costo: $500 MXN (antes $800)',
      'Incluye presentación',
      'Seguimiento por 6 meses'
    ],
    faqs: [
      {
        q: '¿Qué pasa si tengo declaraciones pendientes?',
        a: 'Te ayudamos a presentar todas las declaraciones pendientes y regularizar tu situación fiscal.'
      },
      {
        q: '¿Hay multas por declaraciones tardías?',
        a: 'Sí, pero podemos ayudarte a minimizar las multas y regularizar tu situación.'
      }
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
      'Cierre anual',
      'Reportes ejecutivos'
    ],
    requisitos: [
      'RFC de la empresa',
      'Documentos contables',
      'Comprobantes bancarios',
      'Facturas y recibos'
    ],
    proceso: [
      'Recopilación de documentos',
      'Registro contable',
      'Conciliaciones',
      'Declaraciones mensuales',
      'Cierre anual'
    ],
    tiempos: [
      'Servicio mensual: $1,000 MXN',
      'Cierre anual: $2,000 MXN',
      'Incluye reportes',
      'Acceso a plataforma'
    ],
    faqs: [
      {
        q: '¿Qué incluye el servicio mensual?',
        a: 'Incluye registro de operaciones, conciliaciones bancarias, declaraciones mensuales y reportes.'
      },
      {
        q: '¿Puedo acceder a mis reportes en línea?',
        a: 'Sí, tienes acceso a una plataforma donde puedes ver todos tus reportes y estados financieros.'
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getServicesByCategory(category: Category): Service[] {
  return services.filter(service => service.category === category);
}

export function getServicesByAudience(audience: Audience): Service[] {
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

export function getUniqueCategories(): Category[] {
  return Array.from(new Set(services.map(service => service.category)));
}

export function getUniqueAudiences(): Audience[] {
  return Array.from(new Set(services.map(service => service.audience)));
}
