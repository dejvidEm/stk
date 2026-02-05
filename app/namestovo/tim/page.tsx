'use client';

import Link from 'next/link';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  Award, 
  Users, 
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';

export default function TimPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Ing. Peter Novák',
      position: 'Vedúci technických kontrol',
      specialization: 'STK a EK osobných vozidiel',
      experience: '15 rokov',
      certifications: ['STK certifikát triedy A', 'EK certifikát', 'Školenie DEKRA'],
      phone: '+421 43 765 4321',
      email: 'peter.novak@stktvrdosin.sk',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Skúsený technik s 15-ročnou praxou v oblasti technických kontrol. Špecializuje sa na osobné vozidlá a elektrotechnické kontroly.'
    },
    {
      id: 2,
      name: 'Bc. Mária Kováčová',
      position: 'Technik STK',
      specialization: 'Motocykle a štvorkolky',
      experience: '8 rokov',
      certifications: ['STK certifikát triedy B', 'Školenie pre motocykle', 'Prvá pomoc'],
      phone: '+421 43 765 4322',
      email: 'maria.kovacova@stktvrdosin.sk',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Odborníčka na kontroly motocyklov a štvorkoliek. Má rozsiahle skúsenosti s dvoj a štvorkolesovými vozidlami.'
    },
    {
      id: 3,
      name: 'Milan Hudák',
      position: 'Senior technik',
      specialization: 'Nákladné vozidlá a autobusy',
      experience: '12 rokov',
      certifications: ['STK certifikát triedy C', 'ADR certifikát', 'Školenie Volvo'],
      phone: '+421 43 765 4323',
      email: 'milan.hudak@stktvrdosin.sk',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Špecialista na kontroly nákladných vozidiel a autobusov. Má certifikáty pre kontrolu vozidiel prepravujúcich nebezpečné látky.'
    },
    {
      id: 4,
      name: 'Tomáš Svoboda',
      position: 'Administratívny pracovník',
      specialization: 'Rezervácie a dokumentácia',
      experience: '5 rokov',
      certifications: ['Kurz GDPR', 'Školenie zákazníckych služieb'],
      phone: '+421 43 765 4324',
      email: 'tomas.svoboda@stktvrdosin.sk',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Stará sa o rezervácie termínov, vedenie dokumentácie a zabezpečuje hladký chod administratívnych procesov.'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: teamMembers.length,
      label: 'Odborníkov v tíme',
      color: 'brand-red'
    },
    {
      icon: Award,
      value: '40+',
      label: 'Certifikátov a školení',
      color: 'brand-green'
    },
    {
      icon: Clock,
      value: '40+',
      label: 'Rokov skúseností spolu',
      color: 'brand-gray'
    },
    {
      icon: Star,
      value: '100%',
      label: 'Spokojnosť zákazníkov',
      color: 'brand-green'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-red-600 to-brand-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link 
              href="/namestovo" 
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Späť na hlavnú stránku
            </Link>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Náš tím odborníkov
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Spoznajte profesionálov, ktorí sa starajú o bezpečnosť vašich vozidiel. 
              Náš tím má certifikáty, skúsenosti a nadšenie pre svoju prácu.
            </p>
          </div>
        </div>
      </section>


      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`bg-${stat.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
                </div>
                <div className="text-3xl font-bold text-brand-gray-900 mb-2">{stat.value}</div>
                <div className="text-brand-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray-900 mb-4">
              Zoznámte sa s naším tímom
            </h2>
            <p className="text-lg text-brand-gray-600 max-w-3xl mx-auto">
              Každý člen nášho tímu je certifikovaný odborník s rokami skúseností 
              v oblasti technických kontrol vozidiel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-brand-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-brand-red-600 font-semibold mb-2">
                          {member.position}
                        </p>
                        <p className="text-brand-gray-600 text-sm mb-2">
                          {member.specialization}
                        </p>
                        <div className="flex items-center text-brand-green-600 text-sm font-semibold">
                          <Award className="h-4 w-4 mr-1" />
                          {member.experience} skúseností
                        </div>
                      </div>
                    </div>

                    <p className="text-brand-gray-600 text-sm mb-4 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Certifications */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-brand-gray-900 mb-2">
                        Certifikáty a školenia:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.certifications.map((cert, index) => (
                          <span 
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-brand-green-100 text-brand-green-800"
                          >
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-brand-gray-100">
                      <a 
                        href={`tel:${member.phone}`}
                        className="inline-flex items-center justify-center px-3 py-2 bg-brand-red-600 hover:bg-brand-red-700 text-white text-sm rounded-lg transition-colors"
                      >
                        <Phone className="h-4 w-4 mr-1" />
                        Volať
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center justify-center px-3 py-2 bg-brand-green-600 hover:bg-brand-green-700 text-white text-sm rounded-lg transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-gray-900 mb-4">
            Máte otázky k technickej kontrole?
          </h2>
          <p className="text-lg text-brand-gray-600 mb-8">
            Náš tím je tu pre vás. Neváhajte nás kontaktovať s akýmikoľvek otázkami 
            týkajúcimi sa STK alebo EK vašich vozidiel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/namestovo/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-red-600 hover:bg-brand-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Kontaktovať nás
            </Link>
            <Link 
              href="/namestovo/rezervacia"
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-green-600 hover:bg-brand-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Rezervovať termín
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
