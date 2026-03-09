import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(20).optional(),
  address: z.string().trim().max(300).optional(),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    // mailto fallback — for a real form, connect to an email service
    const subject = encodeURIComponent(`Inspection Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProperty Address: ${formData.address}\n\n${formData.message}`
    );
    window.location.href = `mailto:chanwick@gmail.com?subject=${subject}&body=${body}`;
    setSending(false);
    toast.success("Opening your email client…");
  };

  const inputClass =
    "w-full h-11 px-4 rounded-md border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm";

  return (
    <section id="contact" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Info */}
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ready to schedule an inspection or have questions? Reach out — we typically respond within a few hours.
            </p>

            <div className="space-y-5">
              <a href="tel:6318974024" className="flex items-center gap-3 text-foreground hover:text-foreground/80 transition-colors">
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">(631) 897-4024</span>
              </a>
              <a href="mailto:chanwick@gmail.com" className="flex items-center gap-3 text-foreground hover:text-foreground/80 transition-colors">
                <div className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">chanwick@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 bg-card border border-border rounded-lg p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@email.com" />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="(555) 555-5555" />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-foreground mb-1.5">Property Address</label>
                <input id="address" name="address" value={formData.address} onChange={handleChange} className={inputClass} placeholder="123 Main St, City, NY" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm resize-none"
                placeholder="Tell us about the property and preferred inspection date…"
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
