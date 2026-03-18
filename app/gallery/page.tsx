"use client";

import { useState } from "react";
import { Camera, X, Play, ZoomIn } from "lucide-react";

const galleryCategories = ["All", "Facilities", "Equipment", "Treatments", "Success Stories"];

const advancedGalleryImages = [
  { 
    title: "State-of-the-Art Rehabilitation Center", 
    category: "Facilities",
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    title: "Advanced Electrotherapy Setup", 
    category: "Equipment",
    url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    title: "Sports Injury Recovery Session", 
    category: "Treatments",
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    title: "Robotic Gait Training Tool", 
    category: "Equipment",
    url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    title: "Private Consultation Room", 
    category: "Facilities",
    url: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    title: "Post-Surgery Mobility Work", 
    category: "Treatments",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    title: "Spinal Decompression Table", 
    category: "Equipment",
    url: "https://images.unsplash.com/photo-1584820927503-490b4d4400e2?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    title: "Patient Achieving Full Range of Motion", 
    category: "Success Stories",
    url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    title: "Hydrotherapy Pool Area", 
    category: "Facilities",
    url: "https://images.unsplash.com/photo-1538108149393-cebb92afea02?auto=format&fit=crop&q=80&w=1200" 
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === "All" 
    ? advancedGalleryImages 
    : advancedGalleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-medical-dark text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-primary/20 opacity-50"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-medical-accent/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Our Works & Gallery</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Take a visual journey through our world-class facilities and witness the advanced treatments we provide.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-medical-primary text-white shadow-md transform scale-105" 
                  : "bg-white text-medical-dark border border-gray-200 hover:border-medical-primary hover:text-medical-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry or Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100 aspect-[4/3] cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-medical-dark/90 via-medical-dark/50 to-transparent p-6 pt-16 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-medical-primary-light text-xs font-bold tracking-wider uppercase mb-1">{image.category}</p>
                <h3 className="text-white font-semibold text-lg leading-tight">{image.title}</h3>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedImage(null)}>
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all focus:outline-none"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
