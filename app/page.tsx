import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, HeartPulse, UserCheck, Star, Clock, CheckCircle2 } from "lucide-react";
import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-medical-primary-light/30 pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-medical-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 -left-20 w-72 h-72 bg-medical-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-accent-light text-medical-accent font-medium text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-medical-accent"></span>
                </span>
                Accepting New Patients
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-medical-dark leading-tight">
                Recover Faster, <br /> Live Pain-Free
              </h1>
              <p className="text-lg text-medical-muted max-w-lg leading-relaxed">
                Expert physiotherapy and rehabilitation services tailored to your specific needs. Experience compassionate care at Prime Physiotherapy Center.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">Book Appointment</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">Explore Services</Button>
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                      <UserCheck className="h-5 w-5 text-gray-400" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="text-sm font-medium text-medical-dark mt-1">4.9/5 from 79+ reviews</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative lg:h-[500px] h-[350px] animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="absolute inset-0 bg-medical-primary rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <div className="absolute inset-0 bg-medical-accent rounded-3xl transform -rotate-2 scale-105 opacity-20"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                  alt="Physiotherapy Session"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4 animate-bounce hover:pause">
                <div className="bg-medical-primary-light p-3 rounded-full text-medical-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-medical-dark text-sm">Mon - Sat</p>
                  <p className="text-xs text-medical-muted">9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-medical-primary font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Comprehensive Rehabilitation Services</h3>
            <p className="text-medical-muted text-lg">We offer a wide range of specialized therapies to help you regain mobility, strength, and confidence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pain Management",
                desc: "Effective strategies to reduce chronic and acute pain through targeted therapies.",
                icon: <Activity className="h-8 w-8" />
              },
              {
                title: "Sports Injury Rehab",
                desc: "Get back to your sport faster with specialized recovery programs for athletes.",
                icon: <HeartPulse className="h-8 w-8" />
              },
              {
                title: "Neurological Rehab",
                desc: "Expert care for patients recovering from stroke, spinal cord injuries, or nerve damage.",
                icon: <UserCheck className="h-8 w-8" />
              }
            ].map((service, idx) => (
              <Card key={idx} className="p-8 group hover:bg-medical-primary hover:text-white transition-colors duration-300">
                <div className="w-16 h-16 rounded-2xl bg-medical-primary-light text-medical-primary flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-medical-dark group-hover:text-white mb-3">{service.title}</h4>
                <p className="text-medical-muted group-hover:text-white/80 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="text-medical-primary group-hover:text-white flex items-center font-medium text-sm group/link">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Short Section */}
      <section className="py-24 bg-gradient-to-br from-medical-primary-light/50 to-white clip-path-slant relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                  alt="Clinic Interior"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute top-10 -right-8 bg-medical-dark text-white p-6 rounded-2xl shadow-xl text-center hidden md:block">
                <span className="text-4xl font-bold text-medical-accent block">49+</span>
                <span className="text-sm font-medium uppercase tracking-wider">Years Experience</span>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
              <h2 className="text-medical-primary font-semibold tracking-wide uppercase text-sm mb-2">About Our Clinic</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-medical-dark">Dedicated to Your Physical Well-being</h3>
              <p className="text-lg text-medical-muted leading-relaxed">
                At Prime Physiotherapy and Rehabilitation Center, we believe in a holistic approach to healing. Our state-of-the-art facility in the Metropolis is equipped with modern therapeutic technology and staffed by highly trained professionals.
              </p>

              <ul className="space-y-4 pt-4">
                {[
                  "Personalized treatment plans",
                  "Advanced therapeutic equipment",
                  "Experienced and certified physiotherapists",
                  "Comfortable and hygienic environment"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-medical-accent shrink-0" />
                    <span className="text-medical-dark font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <Link href="/about">
                  <Button>Read Our Full Story</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-medical-primary font-semibold tracking-wide uppercase text-sm mb-2">Pricing Plans</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">Transparent & Affordable Care</h3>
            <p className="text-lg text-medical-muted font-medium">Choose the plan that fits your recovery journey. No hidden fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <Card className="p-8 border-none bg-white shadow-lg relative flex flex-col">
              <div className="mb-8">
                <h4 className="text-xl font-bold text-medical-dark mb-2">Initial Consultation</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-medical-primary">₹500</span>
                  <span className="text-medical-muted font-medium">/ session</span>
                </div>
                <p className="text-medical-muted">Perfect for diagnosing your condition and mapping a recovery plan.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Comprehensive assessment",
                  "Range of motion testing",
                  "Postural evaluation",
                  "Personalized recovery roadmap"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-medical-accent shrink-0 mt-0.5" />
                    <span className="text-medical-dark font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-auto">
                <Button className="w-full" variant="outline">Book Consultation</Button>
              </Link>
            </Card>

            {/* Plan 2 */}
            <Card className="p-10 border-2 border-medical-primary bg-white relative flex flex-col transform md:-translate-y-4 shadow-xl ">
              <div className="absolute top-0 left-1/2 mt-2  transform -translate-x-1/2 -translate-y-1/2 bg-medical-primary text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-md">
                MOST POPULAR
              </div>
              <div className="mb-8">
                <h4 className="text-xl font-bold text-medical-dark mb-2">Standard Therapy</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-medical-primary">₹800</span>
                  <span className="text-medical-muted font-medium">/ session</span>
                </div>
                <p className="text-medical-muted">Ideal for active treatment utilizing advanced therapeutic modalities.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "Manual therapy",
                  "Electrotherapy (TENS/IFT)",
                  "Targeted stretching",
                  "Pain relief management",
                  "Home exercise plan"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-medical-accent shrink-0 mt-0.5" />
                    <span className="text-medical-dark font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-auto">
                <Button className="w-full text-lg shadow-md hover:shadow-lg">Book Session</Button>
              </Link>
            </Card>

            {/* Plan 3 */}
            <Card className="p-8 border-none bg-white shadow-lg relative flex flex-col">
              <div className="mb-8">
                <h4 className="text-xl font-bold text-medical-dark mb-2">Recovery Package</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-extrabold text-medical-primary">₹3,500</span>
                  <span className="text-medical-muted font-medium">/ 5 sessions</span>
                </div>
                <p className="text-medical-muted">Post-surgery or chronic condition recovery with dedicated support.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  "5 complete therapy sessions",
                  "Priority booking slots",
                  "Progress tracking",
                  "Weekly reassessment",
                  "WhatsApp support"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-medical-accent shrink-0 mt-0.5" />
                    <span className="text-medical-dark font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="mt-auto">
                <Button className="w-full" variant="outline">Choose Package</Button>
              </Link>
            </Card>
          </div>

          <div className="text-center mt-12 bg-medical-primary-light/50 border border-medical-primary/20 rounded-2xl p-6 mx-auto max-w-4xl text-medical-dark">
            <span className="font-semibold text-medical-primary">Note:</span> Specialized treatments like Neurological Rehab or Sports Injury may have custom pricing. Please <Link href="/contact" className="font-bold hover:underline">contact us</Link> for exact details.
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-medical-primary font-semibold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-medical-dark mb-4">What Our Patients Say</h3>
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <span className="font-bold text-lg text-medical-dark">4.9/5 Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The treatment I received for my back pain was phenomenal. The staff is highly professional and caring.", author: "Rahul Sharma" },
              { text: "Recovering from my sports injury felt impossible until I visited Prime Physiotherapy. Highly recommended!", author: "Priya Singh" },
              { text: "Excellent facilities and very knowledgeable doctors. They took the time to understand my issue thoroughly.", author: "Amit Kumar" }
            ].map((review, idx) => (
              <Card key={idx} className="p-8 bg-gray-50 border-none">
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-medical-dark italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-medical-primary-light flex items-center justify-center font-bold text-medical-primary">
                    {review.author[0]}
                  </div>
                  <span className="font-semibold text-medical-dark">{review.author}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Recovery Journey?</h2>
          <p className="text-medical-primary-light text-lg mb-10 max-w-2xl mx-auto">
            Book a consultation today and let our experts design a customized rehabilitation plan for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto text-lg font-bold">
                Book Appointment
              </Button>
            </Link>
            <a href="tel:+15551234567" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full bg-white" size="lg">
                Call: +1 (555) 123-4567
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
