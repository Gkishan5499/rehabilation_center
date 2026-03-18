import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";

export const metadata = {
  title: "Contact Us | Maya Physiotherapy",
  description: "Get in touch with Maya Physiotherapy in Kanpur. Find our address, phone number, and opening hours.",
};

export default function ContactPage() {
  return (
    <div className="bg-white pb-20">
      <div className="bg-medical-dark text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-primary/20 opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're here to help you. Reach out to book an appointment or ask any questions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Details & Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-medical-dark mb-6">Get In Touch</h2>
              <p className="text-medical-muted text-lg mb-8">
                Ready to take the first step towards a pain-free life? Contact us today.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-medical-primary-light p-3 rounded-full text-medical-primary shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-medical-dark text-lg mb-1">Clinic Address</h4>
                  <p className="text-medical-muted leading-relaxed">MIG 6, KDA Colony Rd, Lal Bangla,<br/>Kanpur, Uttar Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-medical-primary-light p-3 rounded-full text-medical-primary shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-medical-dark text-lg mb-1">Phone Number</h4>
                  <a href="tel:+919889197771" className="text-medical-primary font-medium hover:underline text-lg">+91 98891 97771</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-medical-primary-light p-3 rounded-full text-medical-primary shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-medical-dark text-lg mb-1">Working Hours</h4>
                  <ul className="text-medical-muted space-y-1">
                    <li><span className="font-medium text-medical-dark">Monday - Saturday:</span> 9:00 AM - 8:00 PM</li>
                    <li><span className="font-medium text-medical-dark">Sunday:</span> Closed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="w-full lg:w-2/3 p-8 md:p-12 border-none bg-gray-50">
            <h3 className="text-2xl font-bold text-medical-dark mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-medical-dark mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-medical-primary focus:border-medical-primary outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-medical-dark mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-medical-primary focus:border-medical-primary outline-none transition-all"
                    placeholder="+91 **********"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-medical-dark mb-2">Service Interested In (Optional)</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-medical-primary focus:border-medical-primary outline-none transition-all bg-white"
                >
                  <option value="">Select a Service</option>
                  <option value="physiotherapy">General Physiotherapy</option>
                  <option value="pain">Pain Management</option>
                  <option value="sports">Sports Injury Rehab</option>
                  <option value="surgery">Post Surgery Rehab</option>
                  <option value="neuro">Neurological Rehab</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-medical-dark mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-medical-primary focus:border-medical-primary outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* Map Embed */}
      <div className="h-[400px] w-full mt-10">
        <iframe 
          src="https://www.google.com/maps?q=MIG+6,+KDA+Colony+Rd,+Kanpur&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[20%] sepia-[10%] hue-rotate-15"
        ></iframe>
      </div>
    </div>
  );
}
