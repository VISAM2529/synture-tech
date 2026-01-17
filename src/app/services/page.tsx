import { Monitor, Smartphone, Cog, LayoutDashboard, Database, Server, Headphones, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Synture Tech",
    description: "Web development, mobile apps, ERPs, and custom software solutions.",
};

const services = [
    {
        title: "Website Development",
        description: "We create stunning, high-performance websites that capture your brand identity and convert visitors into customers. From corporate sites to e-commerce platforms, we build it all.",
        benefits: ["SEO Optimized", "Mobile Responsive", "Fast Loading Speeds", "Modern UI/UX"],
        icon: Monitor,
    },
    {
        title: "Mobile App Development",
        description: "Reach your customers on the go with our native Android and iOS app development services. we build intuitive and robust mobile applications.",
        benefits: ["Cross-platform Support", "User-Centric Design", "Offline Functionality", "Secure Architecture"],
        icon: Smartphone,
    },
    {
        title: "Custom Software Development",
        description: "Off-the-shelf software not fitting your needs? We build custom software solutions tailored specifically to your unique business processes.",
        benefits: ["Scalable Architecture", "Tailored Workflows", "Proprietary Technology", "Detailed Analytics"],
        icon: Cog,
    },
    {
        title: "ERP & CRM Development",
        description: "Streamline your operations with our robust ERP and CRM systems. Manage resources, customers, and data effectively in one centralized platform.",
        benefits: ["Centralized Data", "Automated Workflows", "Real-time Reporting", "Role-based Access"],
        icon: Database,
    },
    {
        title: "API Integrations",
        description: "Connect your disparate systems with our API integration services. We ensure seamless data flow between your various software tools.",
        benefits: ["Data Synchronization", "System Interoperability", "Secure Transfers", "Automated Data Entry"],
        icon: Server,
    },
    {
        title: "Maintenance & Support",
        description: "Our relationship doesn't end at launch. We provide ongoing maintenance and support to ensure your digital assets remain secure and up-to-date.",
        benefits: ["24/7 Monitoring", "Security Updates", "Feature Enhancements", "Bug Fixes"],
        icon: Headphones,
    },
];

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-28">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Our Services</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Comprehensive digital solutions designed to elevate your business.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-12">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow group"
                    >
                        <div className="p-4 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            <service.icon className="h-10 w-10" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground mb-6 text-lg">
                                {service.description}
                            </p>

                            <div className="mb-6">
                                <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">Key Benefits</h4>
                                <div className="flex flex-wrap gap-2">
                                    {service.benefits.map((benefit, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                                            {benefit}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Link href="/contact">
                                <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
