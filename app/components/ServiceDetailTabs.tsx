'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Service } from '@/data/services';

interface ServiceDetailTabsProps {
  service: Service;
}

export default function ServiceDetailTabs({ service }: ServiceDetailTabsProps) {
  const [activeTab, setActiveTab] = useState('descripcion');
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  const toggleAccordion = (section: string) => {
    setOpenAccordions(prev => 
      prev.includes(section) 
        ? prev.filter(item => item !== section)
        : [...prev, section]
    );
  };

  const tabs = [
    { id: 'descripcion', label: 'Descripción' },
    { id: 'requisitos', label: 'Requisitos' },
    { id: 'proceso', label: 'Proceso' },
    { id: 'tiempos-costos', label: 'Tiempos y costos' },
    { id: 'faqs', label: 'Preguntas frecuentes' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'descripcion':
        return (
          <div className="space-y-4">
            <p className="text-text-gray leading-relaxed">{service.description}</p>
            <div>
              <h4 className="font-semibold text-text-gray mb-3">Características principales:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">✓</span>
                    <span className="text-text-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      
      case 'requisitos':
        return (
          <div className="space-y-3">
            {service.requirements.map((requirement, index) => (
              <div key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-text-gray">{requirement}</span>
              </div>
            ))}
          </div>
        );
      
      case 'proceso':
        return (
          <div className="space-y-3">
            {service.process.map((step, index) => (
              <div key={index} className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-text-gray">{step}</span>
              </div>
            ))}
          </div>
        );
      
      case 'tiempos-costos':
        return (
          <div className="space-y-3">
            {service.timesAndCosts.map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span className="text-text-gray">{item}</span>
              </div>
            ))}
          </div>
        );
      
      case 'faqs':
        return (
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleAccordion(`faq-${index}`)}
                  className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-text-gray">{faq.question}</span>
                  {openAccordions.includes(`faq-${index}`) ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {openAccordions.includes(`faq-${index}`) && (
                  <div className="px-4 pb-3 text-text-gray">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        {renderTabContent()}
      </div>
    </div>
  );
}
