import Image from "next/image";
import { Camera } from "lucide-react";

export const metadata = {
  title: "Gallery | Maya Physiotherapy",
  description: "Take a look at Maya Physiotherapy Center's facilities, equipment, and environment.",
};

const galleryImages = [
  { title: "Clinic Entrance / Reception", url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
  { title: "Therapy Room 1", url: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800" },
  { title: "Therapy Room 2", url: "https://images.unsplash.com/photo-1538108149393-cebb92afea02?auto=format&fit=crop&q=80&w=800" },
  { title: "Advanced Equipment", url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" },
  { title: "Patient doing exercises", url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" },
  { title: "Doctor consulting patient", url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" },
  { title: "Waiting Area", url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
  { title: "Electrotherapy Setup", url: "https://images.unsplash.com/photo-1584820927503-490b4d4400e2?auto=format&fit=crop&q=80&w=800" },
  { title: "Physical Therapy Tools", url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800" }
];

export default function GalleryPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-medical-dark text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-primary/20 opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Clinic Gallery</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take a virtual tour of our modern, fully-equipped physiotherapy center in Kanpur.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, idx) => (
            <div 
              key={idx} 
              className="relative group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 aspect-square flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <img src={image.url} alt={image.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-medical-dark/60 transition-all duration-300 z-10 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                <p className="text-white font-semibold text-lg px-4 text-balance">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
