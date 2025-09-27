'use client';

import { getUniqueCategories, getUniqueAudiences } from '@/data/services';
import type { Category, Audience } from '@/data/services';

interface FiltersProps {
  selectedCategory: Category | 'Todas';
  selectedAudience: Audience | 'Todos';
  priceRange: { min: number; max: number };
  onCategoryChange: (category: Category | 'Todas') => void;
  onAudienceChange: (audience: Audience | 'Todos') => void;
  onPriceRangeChange: (range: { min: number; max: number }) => void;
}

export default function Filters({
  selectedCategory,
  selectedAudience,
  priceRange,
  onCategoryChange,
  onAudienceChange,
  onPriceRangeChange
}: FiltersProps) {
  const uniqueCategories = getUniqueCategories();
  const uniqueAudiences = getUniqueAudiences();

  return (
    <div className="space-y-6">
      {/* Tipo de Cliente */}
      <div>
        <h3 className="text-lg font-semibold text-text-gray mb-3">Tipo de Cliente</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="audience"
              value="Todos"
              checked={selectedAudience === 'Todos'}
              onChange={() => onAudienceChange('Todos')}
              className="mr-2 text-primary focus:ring-primary"
            />
            <span className="text-sm text-text-gray">Todos</span>
          </label>
          {uniqueAudiences.map((audience) => (
            <label key={audience} className="flex items-center">
              <input
                type="radio"
                name="audience"
                value={audience}
                checked={selectedAudience === audience}
                onChange={() => onAudienceChange(audience)}
                className="mr-2 text-primary focus:ring-primary"
              />
              <span className="text-sm text-text-gray">{audience}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Categorías */}
      <div>
        <h3 className="text-lg font-semibold text-text-gray mb-3">Categorías</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === 'Todas'}
              onChange={() => onCategoryChange('Todas')}
              className="mr-2 text-primary focus:ring-primary"
            />
            <span className="text-sm text-text-gray">Todas las categorías</span>
          </label>
          {uniqueCategories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => onCategoryChange(category)}
                className="mr-2 text-primary focus:ring-primary"
              />
              <span className="text-sm text-text-gray">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rango de Precio */}
      <div>
        <h3 className="text-lg font-semibold text-text-gray mb-3">Rango de Precio</h3>
        <div className="space-y-3">
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Mínimo"
              value={priceRange.min || ''}
              onChange={(e) => onPriceRangeChange({
                ...priceRange,
                min: parseInt(e.target.value) || 0
              })}
              className="input-field text-sm"
            />
            <input
              type="number"
              placeholder="Máximo"
              value={priceRange.max || ''}
              onChange={(e) => onPriceRangeChange({
                ...priceRange,
                max: parseInt(e.target.value) || 0
              })}
              className="input-field text-sm"
            />
          </div>
          <div className="text-xs text-gray-500">
            Precio en MXN
          </div>
        </div>
      </div>
    </div>
  );
}
