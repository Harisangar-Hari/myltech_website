"use client";

import { useState } from "react";
import { JobPosition } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface ApplicationModalProps {
  job: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ApplicationModal({ job, isOpen, onClose }: ApplicationModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    experience: "0-1",
    coverLetter: "",
    cvAttached: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, cvAttached: true }));
    } else {
      setFormData(prev => ({ ...prev, cvAttached: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!job) return;

    const subject = encodeURIComponent(`Job Application: ${job.title} - ${formData.fullName}`);
    const body = encodeURIComponent(`Applicant Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
LinkedIn: ${formData.linkedin || "N/A"}
Portfolio/GitHub: ${formData.portfolio || "N/A"}
Experience Level: ${formData.experience} years

Cover Letter:
${formData.coverLetter || "No cover letter provided."}

[Note: CV/Resume is intended to be attached directly to this email.]`);

    // Trigger mailto
    window.location.href = `mailto:ganambihai10@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success state
    setIsSuccess(true);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      // Reset form on close
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          linkedin: "",
          portfolio: "",
          experience: "0-1",
          coverLetter: "",
          cvAttached: false,
        });
      }, 300);
      onClose();
    }
  };

  if (!job) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-500" />
            </div>
            <DialogTitle className="text-2xl mb-2">Application Prepared!</DialogTitle>
            <DialogDescription className="text-base text-center">
              We've opened your default email client to send your application. 
              <br /><br />
              <strong>Important:</strong> Don't forget to attach your CV/Resume file to the email before sending it to ganambihai10@gmail.com!
              <br /><br />
              We'll review your application and get back to you within 5 business days.
            </DialogDescription>
            <Button className="mt-8" onClick={() => handleOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Apply for {job.title}</DialogTitle>
              <DialogDescription>
                Fill out the form below. This will generate an email draft for you to send to our hiring team.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium">Full Name *</label>
                  <input required type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address *</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="jane@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-medium">Years of Experience *</label>
                  <select required id="experience" name="experience" value={formData.experience} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="0-1">0-1 years</option>
                    <option value="1-2">1-2 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="linkedin" className="text-sm font-medium">LinkedIn URL</label>
                  <input type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="https://linkedin.com/in/..." />
                </div>
                <div className="space-y-2">
                  <label htmlFor="portfolio" className="text-sm font-medium">Portfolio / GitHub URL</label>
                  <input type="url" id="portfolio" name="portfolio" value={formData.portfolio} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="https://github.com/..." />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="cv" className="text-sm font-medium flex items-center justify-between">
                  CV/Resume Upload *
                  {formData.cvAttached && <span className="text-green-600 text-xs flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> Attached</span>}
                </label>
                <input required type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Since applications are sent via your email client, you will need to re-attach this file in your email app.
                </p>
              </div>

              <div className="space-y-2">
                <label htmlFor="coverLetter" className="text-sm font-medium flex items-center justify-between">
                  Cover Letter
                  <span className="text-xs text-muted-foreground">{formData.coverLetter.length} / 1000</span>
                </label>
                <textarea id="coverLetter" name="coverLetter" maxLength={1000} rows={4} value={formData.coverLetter} onChange={handleChange} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Tell us why you're a great fit..."></textarea>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>Cancel</Button>
                <Button type="submit" className="bg-violet-600 hover:bg-violet-700">Send Application</Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
