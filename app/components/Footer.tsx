import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: 'Trámites SAT', href: '/tramites-y-servicios?categoria=Trámites SAT' },
      { name: 'Facturación Electrónica', href: '/tramites-y-servicios?categoria=Facturación & Nómina' },
      { name: 'Capacitación', href: '/tramites-y-servicios?categoria=Capacitación' },
      { name: 'Planeación Fiscal', href: '/tramites-y-servicios?categoria=Planeación fiscal' }
    ],
    empresa: [
      { name: 'Nosotros', href: '/nosotros' },
      { name: 'Contacto', href: '/contacto' },
      { name: 'Aviso de Privacidad', href: '/aviso-de-privacidad' },
      { name: 'Términos y Condiciones', href: '/terminos-y-condiciones' }
    ]
  };

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-soft">
                <span className="text-white font-bold text-lg tracking-wide">REA</span>
              </div>
              <div className="ml-4">
                <span className="text-xl font-bold text-white">REA</span>
                <p className="text-xs text-primary-200 font-medium">Despacho Contable</p>
              </div>
            </div>
            <p className="text-primary-200 mb-6 leading-relaxed">
              Contabilidad y trámites ante el SAT para personas y empresas en Monterrey, N.L.
            </p>
            <div className="flex items-center text-primary-200">
              <MapPin className="h-4 w-4 mr-2 text-accent-400" />
              <span className="text-sm">Monterrey, N.L.</span>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-primary-200 hover:text-accent-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-primary-200 hover:text-accent-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center text-primary-200">
                <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center mr-3">
                  <Phone className="h-4 w-4 text-accent-400" />
                </div>
                <span className="text-sm">+52 81 2110 2005</span>
              </div>
              <div className="flex items-center text-primary-200">
                <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center mr-3">
                  <Mail className="h-4 w-4 text-accent-400" />
                </div>
                <span className="text-sm">contacto@rea.com.mx</span>
              </div>
              <div className="flex items-center text-primary-200">
                <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center mr-3">
                  <Clock className="h-4 w-4 text-accent-400" />
                </div>
                <span className="text-sm">Lun - Vie: 9:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-primary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-300 text-sm">
              © {currentYear} REA Despacho Contable. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/aviso-de-privacidad" className="text-primary-300 hover:text-accent-400 text-sm transition-colors duration-200">
                Aviso de Privacidad
              </Link>
              <Link href="/terminos-y-condiciones" className="text-primary-300 hover:text-accent-400 text-sm transition-colors duration-200">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
