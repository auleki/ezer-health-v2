"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    practiceName: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Inquiry from ${formData.fullName} - ${formData.practiceName}`;
    const body = `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPractice / Hospital Name: ${formData.practiceName}\n\nMessage:\n${formData.message}`;
    
    const mailtoUrl = `mailto:info@ezerhealthcare.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-48 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <div className="inline-block px-2 py-1 bg-brand-accent/50 text-brand-dark text-[10px] font-bold tracking-widest uppercase mb-8 rounded-sm">
                Connect
              </div>
              <h1 className="text-6xl font-serif text-brand-dark mb-8">Get in touch.</h1>
              <p className="text-zinc-500 text-lg leading-relaxed mb-12 max-w-md">
                Whether you're looking for a personalized demo or technical specifications, our clinical specialists are ready to assist.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-[#FBFBF9] border border-zinc-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-dark/40" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Email</p>
                    <p className="text-brand-dark font-medium">info@ezerhealthcare.com</p>
                    <p className="text-brand-dark font-medium">support@ezerhealthcare.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-sm bg-[#FBFBF9] border border-zinc-100 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-dark/40" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Phone</p>
                    <p className="text-brand-dark font-medium">+234 806 499 1272</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#FBFBF9] p-10 lg:p-16 rounded-sm border border-zinc-100">
               <div className="mb-10 p-4 bg-brand-accent/20 border border-brand-accent/30 rounded-sm">
                 <p className="text-xs text-brand-dark leading-relaxed">
                   <span className="font-bold uppercase tracking-tighter mr-2">Hint:</span> 
                   Fill in your credentials and practice details below. Clicking submit will open your default email client to send your inquiry directly to our clinical team.
                 </p>
               </div>

               <form className="space-y-6" onSubmit={handleSubmit}>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-zinc-200 p-4 rounded-sm text-sm focus:outline-none focus:border-brand-dark transition-colors" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Work Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-zinc-200 p-4 rounded-sm text-sm focus:outline-none focus:border-brand-dark transition-colors" 
                      />
                    </div>
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Practice / Hospital Name</label>
                   <input 
                    type="text" 
                    name="practiceName"
                    value={formData.practiceName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-zinc-200 p-4 rounded-sm text-sm focus:outline-none focus:border-brand-dark transition-colors" 
                   />
                 </div>
                 
                 <div className="space-y-2">
                   <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Message</label>
                   <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-zinc-200 p-4 rounded-sm text-sm focus:outline-none focus:border-brand-dark transition-colors resize-none"
                   ></textarea>
                 </div>
                 
                 <button 
                  type="submit"
                  className="w-full bg-brand-dark text-white py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-brand-primary transition-all shadow-sm"
                 >
                   Send Inquiry
                 </button>
               </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

