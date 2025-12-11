import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Sent",
      description: "We'll contact you shortly to confirm your booking.",
    });
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-charcoal">
        <div className="container-narrow mx-auto text-center">
          <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream mb-4">
            Contact Us
          </h1>
          <p className="text-cream/70 text-lg max-w-xl mx-auto">
            Reserve your table or reach out with any questions
          </p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-3xl text-charcoal mb-8">
                Visit Us
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal mb-1">Address</h3>
                    <p className="text-muted-foreground mb-2">
                      1 ვარაზისხევის ქუჩა<br />
                      თბილისი 0179, საქართველო
                    </p>
                    <a
                      href="https://www.google.com/maps/place/PQ6J%2BJ4+%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gold hover:underline text-sm"
                    >
                      Get Directions
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal mb-1">Phone</h3>
                    <a
                      href="tel:+995593908010"
                      className="text-muted-foreground hover:text-gold transition-colors text-lg"
                    >
                      +995 593 90 80 10
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-charcoal mb-1">Hours</h3>
                    <p className="text-muted-foreground">
                      Open Daily — Until 2:00 AM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-video rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.8548045!2d44.7445!3d41.7295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473a5b8e4c6c7%3A0x8b8b8b8b8b8b8b8b!2sPQ6J%2BJ4%20Tbilisi%2C%20Georgia!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Varazi Restaurant location"
                />
              </div>
            </div>

            {/* Reservation Form */}
            <div>
              <h2 className="font-serif text-3xl text-charcoal mb-8">
                Make a Reservation
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-charcoal">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-background border-border"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-charcoal">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 bg-background border-border"
                    placeholder="+995 ..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-charcoal">
                      Date *
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="mt-2 bg-background border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-charcoal">
                      Time *
                    </Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="mt-2 bg-background border-border"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="guests" className="text-charcoal">
                    Number of Guests *
                  </Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="20"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="mt-2 bg-background border-border"
                    placeholder="2"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-charcoal">
                    Special Requests or Notes
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 bg-background border-border min-h-[120px]"
                    placeholder="Any dietary requirements, celebrations, or special requests..."
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full">
                  Submit Reservation Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  For immediate reservations, please call{" "}
                  <a
                    href="tel:+995593908010"
                    className="text-gold hover:underline"
                  >
                    +995 593 90 80 10
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
