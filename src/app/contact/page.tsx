import { Phone, Mail, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you. Book an appointment or visit us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-foreground">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Phone / WhatsApp
                    </h4>
                    <p className="text-muted-foreground">7450882312</p>
                    <p className="text-muted-foreground">7605844893</p>
                    <p className="text-sm text-slate-400 mt-1">
                      Call to book an appointment
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">
                      academyecovision@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground">
                      Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-xl border border-border">
              <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-primary" />
                Appointment Hours
              </h3>
              <p className="text-muted-foreground mb-4">
                We operate primarily by appointment to ensure personalized
                attention for every student and scholar.
              </p>
              <div className="space-y-2 text-sm font-medium text-slate-600">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
