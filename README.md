# REA Despacho Contable

Sitio web para el despacho contable REA, especializado en servicios contables y trámites ante el SAT para personas físicas y empresas en Monterrey, N.L.

## Características

- **Next.js 14** con App Router
- **TypeScript** para tipado estático
- **TailwindCSS** para estilos
- **Zustand** para manejo de estado global
- **Responsive Design** optimizado para móviles
- **SEO optimizado** con datos estructurados
- **Accesibilidad** cumpliendo estándares AA

## Funcionalidades principales

### Páginas
- **Home**: Hero con búsqueda, servicios populares, testimonios
- **Trámites y servicios**: Listado filtrable con búsqueda avanzada
- **Detalle de servicio**: Información completa con tabs y acordeones
- **Cotización**: Carrito de servicios con cálculo automático
- **Contacto**: Formulario y información de contacto
- **Nosotros**: Información del equipo y valores
- **Aviso de privacidad**: Cumplimiento legal

### Componentes clave
- **SearchBar**: Búsqueda con debounce
- **Filters**: Filtros por categoría, audiencia y precio
- **ServiceCard**: Tarjetas de servicios con precios
- **ServiceDetailTabs**: Tabs con acordeones para detalles
- **WhatsappCTA**: Integración con WhatsApp
- **Breadcrumbs**: Navegación contextual

### Funcionalidades
- Búsqueda en tiempo real
- Filtrado por múltiples criterios
- Estado de cotización persistente
- URLs con parámetros de búsqueda
- Datos estructurados para SEO
- Integración con WhatsApp

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd rea-despacho-contable
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   ```
   
   Editar `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=tu_google_analytics_id
   NEXT_PUBLIC_WHATSAPP_NUMBER=528121102005
   ```

4. **Ejecutar en desarrollo**
   ```bash
   pnpm dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## Scripts disponibles

```bash
# Desarrollo
pnpm dev

# Construcción
pnpm build

# Producción
pnpm start

# Linting
pnpm lint

# Type checking
pnpm typecheck
```

## Estructura del proyecto

```
rea-despacho-contable/
├── app/
│   ├── components/          # Componentes reutilizables
│   ├── contacto/           # Página de contacto
│   ├── cotizacion/         # Página de cotización
│   ├── nosotros/           # Página nosotros
│   ├── servicio/[slug]/    # Páginas dinámicas de servicios
│   ├── tramites-y-servicios/ # Listado de servicios
│   ├── aviso-de-privacidad/ # Aviso legal
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── sitemap.ts          # Generación de sitemap
├── data/
│   └── services.ts         # Datos de servicios y categorías
├── store/
│   └── quoteStore.ts       # Estado global con Zustand
├── public/
│   ├── brand/              # Logo y assets de marca
│   ├── robots.txt          # Configuración SEO
│   └── favicon.ico         # Favicon
└── ...
```

## Personalización

### Agregar nuevos servicios

Editar `data/services.ts`:

```typescript
export const services: Service[] = [
  // ... servicios existentes
  {
    slug: 'nuevo-servicio',
    title: 'Nuevo Servicio',
    summary: 'Descripción breve del servicio',
    price: 500,
    category: 'Categoría',
    audience: 'Empresa',
    features: ['Característica 1', 'Característica 2'],
    faqs: [
      {
        question: '¿Pregunta frecuente?',
        answer: 'Respuesta detallada'
      }
    ],
    description: 'Descripción completa del servicio',
    requirements: ['Requisito 1', 'Requisito 2'],
    process: ['Paso 1', 'Paso 2'],
    timesAndCosts: ['Tiempo estimado: 1 semana', 'Costo: $500 MXN']
  }
];
```

### Modificar colores

Editar `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#0B5ED7',    // Azul principal
      accent: '#00B894',     // Verde acento
      success: '#00B050',    // Verde éxito
      'text-gray': '#1F2937', // Gris texto
      'bg-light': '#F7F7F8', // Fondo claro
    },
  },
}
```

### Agregar nuevas categorías

En `data/services.ts`:

```typescript
export const categories: Category[] = [
  // ... categorías existentes
  {
    id: 'nueva-categoria',
    name: 'Nueva Categoría',
    description: 'Descripción de la categoría'
  }
];
```

## SEO y Accesibilidad

### Datos estructurados
- Schema.org Service para páginas de servicios
- Schema.org FAQPage para preguntas frecuentes
- Schema.org LocalBusiness para información de contacto

### Optimizaciones
- Meta tags dinámicos por página
- OpenGraph para redes sociales
- Sitemap.xml generado automáticamente
- Robots.txt configurado
- Imágenes optimizadas con next/image

### Accesibilidad
- Roles ARIA apropiados
- Contraste AA cumplido
- Navegación por teclado
- Textos alternativos en imágenes
- Estructura semántica HTML

## Despliegue

### Vercel (Recomendado)
El proyecto ya está configurado para Vercel en: https://rea-drab.vercel.app/

**Pasos para desplegar:**
1. Conectar el repositorio https://github.com/NFTSkull/rea.git a Vercel
2. Configurar las siguientes variables de entorno en Vercel:
   ```
   NEXT_PUBLIC_GA_ID=tu_google_analytics_id
   NEXT_PUBLIC_WHATSAPP_NUMBER=528121102005
   NEXT_PUBLIC_SITE_URL=https://rea-drab.vercel.app
   ```
3. El despliegue será automático en cada push a la rama main

### Otras plataformas
```bash
# Construir para producción
npm run build

# Los archivos estáticos estarán en .next/
```

## Contribución

1. Fork el proyecto
2. Crear rama para feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## Soporte

Para soporte técnico o consultas sobre el proyecto:
- Email: contacto@rea.com.mx
- Teléfono: +52 81 2110 2005
- WhatsApp: [Enlace directo](https://wa.me/528121102005)
