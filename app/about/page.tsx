import Image from "next/image";
import { CheckCircle2, Award, Users, ShieldCheck, Activity } from "lucide-react";
import Button from "../components/Button";
import Link from "next/link";

export const metadata = {
  title: "About Us | Maya Physiotherapy",
  description: "Learn about Maya Physiotherapy Clinic in Kanpur. Our mission, vision, and experience in providing top-notch rehabilitation services.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="bg-medical-dark text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-primary/20 pattern-grid opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Maya Physiotherapy</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Dedicated to restoring your mobility, strength, and quality of life through expert care and compassion.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-medical-primary font-semibold tracking-wide uppercase text-sm mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-medical-dark mb-6">A Legacy of Healing in Kanpur</h3>
            <p className="text-lg text-medical-muted mb-6 leading-relaxed">
              Located in the heart of Lal Bangla, Kanpur, Maya Physiotherapy and Rehabilitation Center has been a beacon of hope for thousands of patients suffering from pain and mobility issues.
            </p>
            <p className="text-lg text-medical-muted mb-8 leading-relaxed">
              Our clinic combines traditional therapeutic techniques with modern medical advancements to ensure that each patient receives personalized, highly effective treatment.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <div className="bg-medical-primary-light p-4 rounded-xl text-medical-primary">
                  <Award className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-medical-dark">15+</div>
                  <div className="text-sm font-medium text-medical-muted uppercase tracking-wider">Years Exp</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-medical-accent-light p-4 rounded-xl text-medical-accent">
                  <Users className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-medical-dark">10k+</div>
                  <div className="text-sm font-medium text-medical-muted uppercase tracking-wider">Patients</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white h-[500px] flex items-center justify-center border-4 border-white">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="About Maya Physiotherapy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-medical-primary-light/30 p-10 rounded-3xl border border-medical-primary/10">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="h-8 w-8 text-medical-primary" />
              </div>
              <h3 className="text-2xl font-bold text-medical-dark mb-4">Our Mission</h3>
              <p className="text-medical-muted leading-relaxed text-lg">
                To provide compassionate, comprehensive, and evidence-based physiotherapy services that empower individuals to overcome physical limitations and achieve their optimal state of health.
              </p>
            </div>
            <div className="bg-medical-accent-light/30 p-10 rounded-3xl border border-medical-accent/10">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Activity className="h-8 w-8 text-medical-accent" />
              </div>
              <h3 className="text-2xl font-bold text-medical-dark mb-4">Our Vision</h3>
              <p className="text-medical-muted leading-relaxed text-lg">
                To be the leading rehabilitation center in Uttar Pradesh, recognized for our clinical excellence, innovative treatment pathways, and unwavering commitment to patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Why Choose Maya Physiotherapy?</h2>
          <p className="text-xl text-medical-muted">We stand out because of our unwavering dedication to your recovery.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {[
            { title: "Expert Professionals", desc: "Our team consists of certified and highly experienced physiotherapists." },
            { title: "Personalized Care", desc: "No two bodies are the same. We create customized treatment plans for you." },
            { title: "Modern Equipment", desc: "We utilize the latest therapeutic technologies for faster recovery." },
            { title: "Focus on Prevention", desc: "We don't just treat the pain; we find the root cause to prevent recurrence." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="mt-1">
                <CheckCircle2 className="h-6 w-6 text-medical-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-medical-dark mb-2">{item.title}</h4>
                <p className="text-medical-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/contact">
             <Button size="lg">Ready to Book an Appointment?</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
