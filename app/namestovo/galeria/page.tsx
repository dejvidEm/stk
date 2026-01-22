'use client';

import { useState } from 'react';
import { 
  Camera, 
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Building,
  Car,
  Users,
  Wrench
} from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: '/images/namestovo.webp',
      title: 'Exteriér STK centra',
      category: 'exterior',
      description: 'Moderný exteriér nášho STK centra v Námestove'
    },
    {
      id: 2,
      src: '/images/namestovo_2.webp',
      title: 'Hlavný vchod',
      category: 'exterior',
      description: 'Hlavný vchod do STK centra s parkoviskom pre zákazníkov'
    },
    {
      id: 3,
      src: '/images/namestovo_3.webp',
      title: 'Areál STK',
      category: 'exterior',
      description: 'Pohľad na celý areál STK s parkovacími miestami'
    },
    {
      id: 4,
      src: '/images/u5546862511_modern_car_inspection_station_building_exterior_S_a306ea55-3462-4e35-91bf-366d476c627e_2.png',
      title: 'Moderné STK centrum',
      category: 'exterior',
      description: 'Moderné STK centrum s najnovším vybavením'
    },
    {
      id: 5,
      src: '/images/u5546862511_modern_car_inspection_station_building_exterior_S_a306ea55-3462-4e35-91bf-366d476c627e_3.png',
      title: 'STK budova',
      category: 'exterior',
      description: 'Profesionálna budova STK centra'
    },
    {
      id: 6,
      src: '/images/i1.jpg',
      title: 'Technické vybavenie',
      category: 'equipment',
      description: 'Moderne technické vybavenie pre kontroly vozidiel'
    },
    {
      id: 7,
      src: '/images/i2.jpg',
      title: 'Diagnostické zariadenia',
      category: 'equipment',
      description: 'Profesionálne diagnostické zariadenia'
    },
    {
      id: 8,
      src: '/images/i3.jpg',
      title: 'Kontrolná linka',
      category: 'equipment',
      description: 'Kontrolná linka pre technické kontroly'
    },
    {
      id: 9,
      src: '/images/i4.jpg',
      title: 'Emisné meranie',
      category: 'equipment',
      description: 'Zariadenie pre emisné kontroly vozidiel'
    },
    {
      id: 10,
      src: '/images/i5.jpg',
      title: 'Technická kontrola',
      category: 'services',
      description: 'Proces technickej kontroly vozidla'
    },
    {
      id: 11,
      src: '/images/namestovo.webp',
      title: 'STK Námestovo',
      category: 'network',
      description: 'Naše STK centrum v Námestove'
    }
  ];

  const categories = [
    { id: 'all', name: 'Všetko', icon: Camera },
    { id: 'exterior', name: 'Exteriér', icon: Building },
    { id: 'equipment', name: 'Vybavenie', icon: Wrench },
    { id: 'services', name: 'Služby', icon: Car },
    { id: 'network', name: 'Sieť', icon: Users }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage ? filteredImages.find(img => img.id === selectedImage) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-red-600 to-brand-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Camera className="h-12 w-12" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Galéria
              </h1>
            </div>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Pozrite si naše moderné STK centrum a technické vybavenie
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-brand-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'all' ? 'Všetky fotografie' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600">
              {filteredImages.length} {filteredImages.length === 1 ? 'fotografia' : filteredImages.length < 5 ? 'fotografie' : 'fotografií'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openModal(image.id)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Žiadne fotografie</h3>
              <p className="text-gray-600">V tejto kategórii sa nenašli žiadne fotografie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImageData.src}
              alt={selectedImageData.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImageData.title}</h3>
              <p className="text-gray-300">{selectedImageData.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-brand-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Navštívte naše centrum
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Presvedčte sa na vlastné oči o kvalite našich služieb a modernom vybavení
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/namestovo/kontakt"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-red-600 hover:bg-brand-red-700 transition-colors"
            >
              Kontakt a adresa
            </a>
            <a
              href="/namestovo/rezervacia"
              className="inline-flex items-center px-8 py-3 border-2 border-brand-red-600 text-base font-medium rounded-md text-brand-red-600 hover:bg-brand-red-600 hover:text-white transition-colors"
            >
              Rezervovať termín
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}