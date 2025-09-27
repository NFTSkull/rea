'use client';

import { Search, FileText } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  description?: string;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
}

export default function EmptyState({ 
  title = "No se encontraron resultados",
  description = "Intenta ajustar tus filtros de búsqueda o explorar nuestras categorías.",
  showSearch = false,
  onSearch
}: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <FileText className="h-12 w-12 text-gray-400" />
      </div>
      
      <h3 className="text-xl font-semibold text-text-gray mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        {description}
      </p>
      
      {showSearch && onSearch && (
        <div className="max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar servicios..."
              onChange={(e) => onSearch(e.target.value)}
              className="input-field pl-10"
            />
          </div>
        </div>
      )}
    </div>
  );
}
