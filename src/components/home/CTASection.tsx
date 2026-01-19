import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-cgg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            label="Get Started"
            title="Ready to Partner with CGG?"
            description="Contact our team to discuss your project requirements and discover how we can help you achieve your goals."
            centered
          />

          {isSubmitted ? (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-border">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-cgg-orange/10 rounded-full mb-6">
                <CheckCircle className="h-10 w-10 text-cgg-orange" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Thank You!
              </h3>
              <p className="text-muted-foreground">
                We've received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground mb-3"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="input-premium"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground mb-3"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="input-premium"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-foreground mb-3"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="input-premium"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-foreground mb-3"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="input-premium resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto inline-flex items-center justify-center gap-3 text-lg px-12 py-5"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}