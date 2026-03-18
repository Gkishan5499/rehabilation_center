import { ArrowRight, Activity, Bone, HeartPulse, BrainCircuit, Accessibility } from "lucide-react";
import Button from "../components/Button";
import Link from "next/link";
import Card from "../components/Card";

export const metadata = {
  title: "Our Services | Maya Physiotherapy",
  description: "Explore the comprehensive physiotherapy and rehabilitation services offered at Maya Physiotherapy...",
};

const services = [
  {
    id: "physiotherapy",
    title: "General Physiotherapy",
    desc: "Comprehensive assessment and treatment for various musculoskeletal issues, improving mobility and reducing pain.",
    icon: <Accessibility className="h-10 w-10" />
  },
  {
    id: "pain-management",
    title: "Pain Management",
    desc: "Targeted strategies linking manual therapy, electrotherapy, and exercise to alleviate acute and chronic pain.",
    icon: <Activity className="h-10 w-10" />
  },
  {
    id: "sports-injury",
    title: "Sports Injury Rehab",
    desc: "Specialized recovery programs tailored for athletes to return to their sport safely and at peak performance.",
    icon: <HeartPulse className="h-10 w-10" />
  },
  {
    id: "post-surgery",
    title: "Post Surgery Rehab",
    desc: "Guided rehabilitation essential for regaining strength, flexibility, and function after orthopedic surgeries.",
    icon: <Bone className="h-10 w-10" />
  },
  {
    id: "neurological",
    title: "Neurological Rehab",
    desc: "Expert care for conditions like stroke, Parkinson's, and spinal injuries, focusing on motor control and balance.",
    icon: <BrainCircuit className="h-10 w-10" />
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-medical-dark text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-primary/20 opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive rehabilitation tailored to your specific needs, helping you return to the life you love.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <Card key={idx} className="p-8 group hover:border-medical-primary/50 flex flex-col sm:flex-row gap-8 items-start">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-medical-primary-light text-medical-primary flex items-center justify-center group-hover:bg-medical-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-medical-dark mb-3">{service.title}</h3>
                <p className="text-medical-muted leading-relaxed mb-6 text-lg">{service.desc}</p>
                <Link href={`/contact?service=${service.id}`} className="inline-flex items-center text-medical-primary font-semibold hover:text-medical-secondary">
                  Book this service <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-medical-primary-light/50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-medical-dark mb-6">Need a specialized treatment?</h2>
          <p className="text-lg text-medical-muted mb-8">
            If you're unsure about what type of therapy you need, contact us for an initial consultation. We'll assess your condition and recommend the best path forward.
          </p>
          <Link href="/contact">
            <Button size="lg">Schedule Consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
