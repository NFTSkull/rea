# 🚀 Instrucciones para Desplegar en Vercel

## ✅ Estado Actual
- ✅ Código subido a GitHub: https://github.com/NFTSkull/rea.git
- ✅ Proyecto Vercel creado: https://rea-drab.vercel.app/
- ✅ Configuración lista para despliegue

## 🔧 Pasos para Conectar Vercel con GitHub

### 1. Conectar Repositorio
1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Haz clic en "Add New..." > "Project"
3. Importa el repositorio: `NFTSkull/rea`
4. Configura el proyecto:
   - **Framework Preset**: Next.js (detectado automáticamente)
   - **Root Directory**: `./` (por defecto)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### 2. Configurar Variables de Entorno
En Vercel Dashboard > Settings > Environment Variables, agrega:

```
NEXT_PUBLIC_WHATSAPP_NUMBER = 528121102005
NEXT_PUBLIC_SITE_URL = https://rea-drab.vercel.app
NEXT_PUBLIC_GA_ID = (tu_google_analytics_id_si_tienes)
```

### 3. Desplegar
1. Haz clic en "Deploy"
2. Vercel construirá y desplegará automáticamente
3. El sitio estará disponible en: https://rea-drab.vercel.app

## 🔄 Despliegues Automáticos

Una vez conectado, cada push a la rama `main` en GitHub desplegará automáticamente en Vercel.

## 📱 Verificar Funcionamiento

Después del despliegue, verifica:
- ✅ Página principal carga correctamente
- ✅ Navegación entre páginas funciona
- ✅ Búsqueda y filtros funcionan
- ✅ WhatsApp integration funciona
- ✅ Responsive design en móvil
- ✅ SEO meta tags están presentes

## 🎯 URLs Importantes

- **GitHub**: https://github.com/NFTSkull/rea.git
- **Vercel**: https://rea-drab.vercel.app/
- **Vercel Dashboard**: https://vercel.com/dashboard

## 🆘 Solución de Problemas

### Si el despliegue falla:
1. Revisa los logs en Vercel Dashboard
2. Verifica que las variables de entorno estén configuradas
3. Asegúrate de que el build local funciona: `npm run build`

### Si hay errores de TypeScript:
1. Ejecuta `npm run typecheck` localmente
2. Corrige los errores antes de hacer push

### Si hay errores de linting:
1. Ejecuta `npm run lint` localmente
2. Corrige los errores antes de hacer push
