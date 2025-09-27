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
    <footer className="bg-text-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg">
                REA
              </div>
              <span className="ml-3 text-xl font-bold">REA</span>
            </div>
            <p className="text-gray-300 mb-4">
              Contabilidad y trámites ante el SAT para personas y empresas en Monterrey, N.L.
            </p>
            <div className="flex items-center text-gray-300">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">Monterrey, N.L.</span>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+52 81 2110 2005</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">contacto@rea.com.mx</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">Lun - Vie: 9:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} REA Despacho Contable. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/aviso-de-privacidad" className="text-gray-300 hover:text-white text-sm transition-colors">
                Aviso de Privacidad
              </Link>
              <Link href="/terminos-y-condiciones" className="text-gray-300 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
