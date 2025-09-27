# REA Despacho Contable - Configuración del Proyecto

## Variables de Entorno Requeridas

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```bash
# Google Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# WhatsApp Business (requerido)
NEXT_PUBLIC_WHATSAPP_NUMBER=528121102005

# URL del sitio (para producción)
NEXT_PUBLIC_SITE_URL=https://rea.com.mx
```

## Configuración de Desarrollo

### 1. Instalación de dependencias
```bash
pnpm install
```

### 2. Ejecutar en modo desarrollo
```bash
pnpm dev
```

### 3. Verificar linting y tipos
```bash
pnpm lint
pnpm typecheck
```

## Estructura de Datos

### Servicios
Los servicios se definen en `data/services.ts` con la siguiente estructura:

```typescript
interface Service {
  slug: string;           // URL única del servicio
  title: string;          // Título del servicio
  summary: string;        // Resumen breve
  price: number;          // Precio en MXN
  oldPrice?: number;      // Precio anterior (para descuentos)
  category: string;       // Categoría del servicio
  audience: 'Persona' | 'Empresa' | 'Ambos';
  features: string[];     // Características principales
  faqs: FAQ[];           // Preguntas frecuentes
  description: string;    // Descripción completa
  requirements: string[]; // Requisitos
  process: string[];      // Proceso paso a paso
  timesAndCosts: string[]; // Tiempos y costos
}
```

### Categorías
Las categorías se definen en el mismo archivo:

```typescript
interface Category {
  id: string;      // ID único
  name: string;    // Nombre de la categoría
  description: string; // Descripción
}
```

## Personalización

### Colores
Modifica `tailwind.config.ts` para cambiar la paleta de colores:

```typescript
colors: {
  primary: '#0B5ED7',    // Azul principal
  accent: '#00B894',     // Verde acento
  success: '#00B050',    // Verde éxito
  'text-gray': '#1F2937', // Gris texto
  'bg-light': '#F7F7F8', // Fondo claro
}
```

### Logo
Reemplaza `public/brand/rea-logo.svg` con tu logo personalizado.

### Contenido
- **Home**: Edita `app/page.tsx`
- **Servicios**: Modifica `data/services.ts`
- **Contacto**: Actualiza información en `app/contacto/page.tsx`
- **Nosotros**: Personaliza `app/nosotros/page.tsx`

## SEO

### Meta Tags
Cada página tiene sus propios meta tags definidos en el layout o en la página específica.

### Datos Estructurados
- Schema.org Service para páginas de servicios
- Schema.org FAQPage para preguntas frecuentes
- Schema.org LocalBusiness para información de contacto

### Sitemap
Se genera automáticamente en `app/sitemap.ts` basado en los servicios y páginas estáticas.

## Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Otras plataformas
```bash
pnpm build
pnpm start
```

## Monitoreo

### Google Analytics
Configura `NEXT_PUBLIC_GA_ID` para habilitar el tracking automático de:
- Páginas visitadas
- Eventos de WhatsApp
- Solicitudes de servicios

### Eventos Trackeados
- `service_request`: Cuando se agrega un servicio a la cotización
- `whatsapp_click`: Cuando se hace clic en WhatsApp
- `page_view`: Navegación entre páginas

## Mantenimiento

### Agregar Nuevos Servicios
1. Edita `data/services.ts`
2. Agrega el nuevo servicio al array `services`
3. El sitemap se actualizará automáticamente

### Actualizar Precios
Modifica el campo `price` en `data/services.ts` para cada servicio.

### Cambiar Información de Contacto
Actualiza los datos en:
- `app/contacto/page.tsx`
- `app/components/Footer.tsx`
- `app/components/WhatsappCTA.tsx`

## Troubleshooting

### Error de tipos TypeScript
```bash
pnpm typecheck
```

### Error de linting
```bash
pnpm lint --fix
```

### Problemas de build
```bash
pnpm build
```

### Variables de entorno no cargan
Verifica que el archivo `.env.local` esté en la raíz del proyecto y reinicia el servidor de desarrollo.
