import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Synture Tech",
    description: "Get in touch with Synture Tech for your digital needs.",
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-28 md:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Get in Touch</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Have a project in mind? We'd love to hear from you. Send us a message and we'll reply as soon as possible.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border shadow-sm">
                        <div className="bg-primary/10 p-3 rounded-lg text-primary">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Our Office</h3>
                            <p className="text-muted-foreground">
                                123 Tech Park, Innovation Hub,<br />
                                Pune, Maharashtra, India - 411057
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border shadow-sm">
                        <div className="bg-primary/10 p-3 rounded-lg text-primary">
                            <Phone className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Phone</h3>
                            <p className="text-muted-foreground">
                                <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
                            </p>
                            <p className="text-muted-foreground text-sm mt-1">
                                Mon-Fri from 9am to 6pm
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border shadow-sm">
                        <div className="bg-primary/10 p-3 rounded-lg text-primary">
                            <Mail className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Email</h3>
                            <p className="text-muted-foreground">
                                <a href="mailto:hello@synture.tech" className="hover:text-primary transition-colors">hello@synture.tech</a>
                            </p>
                            <p className="text-muted-foreground">
                                <a href="mailto:support@synture.tech" className="hover:text-primary transition-colors">support@synture.tech</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2 p-8 rounded-2xl bg-card border border-border shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
