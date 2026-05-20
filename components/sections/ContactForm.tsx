"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = 
    formData.fullName.trim() !== "" && 
    formData.email.trim() !== "" && 
    formData.subject !== "" && 
    formData.message.trim().length >= 20;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const mailtoSubject = encodeURIComponent(`[MYL-Tech Contact] ${formData.subject} — ${formData.fullName}`);
    const body = encodeURIComponent(`Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.company || "N/A"}
Subject: ${formData.subject}

Message:
${formData.message}`);

    // Trigger mailto
    window.location.href = `mailto:ganambihai10@gmail.com?subject=${mailtoSubject}&body=${body}`;
    
    // Show success state
    setIsSuccess(true);
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  return (
    <FadeIn direction="left" delay={0.2}>
      <div className="bg-card border rounded-3xl p-8 md:p-12 shadow-sm relative">
        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium">Full Name *</label>
            <input required id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Jane Doe" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
              <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="jane@company.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium">Company / Organization</label>
              <input id="company" name="company" value={formData.company} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Acme Corp" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">Subject *</label>
            <select required id="subject" name="subject" value={formData.subject} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="" disabled>Select a subject...</option>
              <option value="Project Inquiry">Project Inquiry</option>
              <option value="Partnership">Partnership</option>
              <option value="Careers">Careers</option>
              <option value="General Question">General Question</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium flex justify-between">
              Message *
              <span className={`text-xs ${formData.message.length > 2000 ? 'text-red-500' : 'text-muted-foreground'}`}>
                {formData.message.length} / 2000
              </span>
            </label>
            <textarea 
              required 
              id="message" 
              name="message" 
              rows={5} 
              minLength={20}
              maxLength={2000}
              value={formData.message} 
              onChange={handleChange} 
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
              placeholder="How can we help you? (Min 20 characters)"
            ></textarea>
            {formData.message.length > 0 && formData.message.length < 20 && (
              <p className="text-xs text-red-500">Message must be at least 20 characters long.</p>
            )}
          </div>

          <Button 
            type="submit" 
            disabled={!isFormValid}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white h-12 text-lg disabled:bg-violet-600/50"
          >
            <Send className="w-4 h-4 mr-2" /> Send Message
          </Button>
          
          {isSuccess && (
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/50 rounded-lg flex items-start">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500 mr-3 shrink-0 mt-0.5" />
              <p className="text-sm text-green-800 dark:text-green-200">
                Your message has been prepared. If your email client didn't open, email us directly at <strong>ganambihai10@gmail.com</strong>
              </p>
            </div>
          )}
        </form>
      </div>
    </FadeIn>
  );
}
