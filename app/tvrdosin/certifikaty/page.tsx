'use client';

import { 
  Download, 
  FileText, 
  Award,
  Shield,
  CheckCircle,
  Calendar,
  ExternalLink
} from 'lucide-react';

export default function CertificatesPage() {
  const certificates = [
    {
      id: 'stk-certificate',
      title: 'SIMONO, s.r.o. ISO 37001:2016',
      fileName: 'certifikat_SIMONO.pdf'
    },
    {
      id: 'ek-certificate',
      title: 'EMADE, s.r.o. ISO 37001:2016',
      fileName: 'certifikat_EMADE.pdf'
    },
    {
      id: 'iso-certificate',
      title: 'STK Tvrdošín, s.r.o. ISO 37001:2016',
      fileName: 'certifikat_STK_Tvrdosin.pdf'
    },
  ];

  const handleDownload = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/cert/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-red-600 to-brand-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="h-12 w-12" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Certifikáty
              </h1>
            </div>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Oficiálne certifikáty a oprávnenia
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Naše certifikáty a oprávnenia
            </h2>
            <p className="text-xl text-gray-600">
              Všetky potrebné certifikáty pre prevádzku STK centra
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-red-100 p-3 rounded-lg flex-shrink-0">
                    <FileText className="h-8 w-8 text-brand-red-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    
                    <button
                      onClick={() => handleDownload(cert.fileName)}
                      className="w-full bg-brand-red-600 hover:bg-brand-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Stiahnuť PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-brand-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Potrebujete ďalšie informácie?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Kontaktujte nás pre akékoľvek otázky ohľadom našich certifikátov a oprávnení.
          </p>
          <a
            href="/tvrdosin/kontakt"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-red-600 hover:bg-brand-red-700 transition-colors"
          >
            Kontaktovať nás
          </a>
        </div>
      </section>
    </div>
  );
}