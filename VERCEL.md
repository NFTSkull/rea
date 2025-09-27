# Configuración para Vercel

## Variables de Entorno Requeridas

Configura estas variables en el dashboard de Vercel (Settings > Environment Variables):

### Variables Obligatorias:
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: 528121102005

### Variables Opcionales:
- `NEXT_PUBLIC_GA_ID`: Tu ID de Google Analytics 4
- `NEXT_PUBLIC_SITE_URL`: https://rea-drab.vercel.app

## Configuración del Proyecto

1. **Framework**: Next.js (detectado automáticamente)
2. **Build Command**: `npm run build`
3. **Output Directory**: `.next`
4. **Install Command**: `npm install`

## Dominio Personalizado

Si tienes un dominio personalizado (ej: rea.com.mx):

1. Ve a Settings > Domains en Vercel
2. Agrega tu dominio
3. Configura los registros DNS según las instrucciones de Vercel
4. Actualiza `NEXT_PUBLIC_SITE_URL` con tu dominio

## Monitoreo

- **Analytics**: Configura Google Analytics con `NEXT_PUBLIC_GA_ID`
- **Performance**: Vercel Analytics está habilitado automáticamente
- **Logs**: Disponibles en el dashboard de Vercel

## Actualizaciones

El proyecto se despliega automáticamente cuando haces push a la rama `main` en GitHub.
