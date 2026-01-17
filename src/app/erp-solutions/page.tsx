import { GraduationCap, Baby, Sprout, Stethoscope, Building2, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ERP Solutions | Synture Tech",
    description: "Specialized ERP solutions for education, healthcare, and retail industries.",
};

const erps = [
    {
        title: "College ERP",
        icon: GraduationCap,
        desc: "A comprehensive management system for colleges and universities handling admissions, exams, fees, and library.",
        features: ["Student Information System", "Fee Management", "Exam & Grading", "Library Management", "Hostel Management"],
    },
    {
        title: "Pre-Primary School ERP",
        icon: Baby,
        desc: "Simplified school management designed specifically for pre-schools and kindergartens.",
        features: ["Attendance Tracking", "Parent Communication App", "Fee Collection", "Event Management", "Daily Reports"],
    },
    {
        title: "Gardening / Nursery ERP",
        icon: Sprout,
        desc: "Manage your plant inventory, sales, and nursery operations efficiently.",
        features: ["Plant Inventory Tracking", "Growth Monitoring", "Sales & Billing", "Supplier Management", "Care Schedules"],
    },
    {
        title: "Medical / Hospital ERP",
        icon: Stethoscope,
        desc: "Integrated healthcare solution for clinics and hospitals to manage patients and staff.",
        features: ["Patient Records (EMR)", "Appointment Scheduling", "Pharmacy Management", "Lab Reporting", "Billing & Insurance"],
    },
    {
        title: "Custom Business ERP",
        icon: Building2,
        desc: "Tailor-made ERP solutions built to fit your specific business logic and workflows.",
        features: ["Custom Workflows", "Third-party Integrations", "Business Intelligence", "Scalable Architecture", "Cloud Deployment"],
    },
];

export default function ERPPage() {
    return (
        <div className="container mx-auto px-4 py-28">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Enterprise Resource Planning</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Industry-specific ERP solutions designed to streamline your operations and improve efficiency.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {erps.map((erp, index) => (
                    <div key={index} className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all hover:translate-y-[-4px]">
                        <div className="p-6 bg-secondary/30 flex items-center gap-4 border-b border-border">
                            <div className="p-3 bg-white dark:bg-card rounded-lg shadow-sm text-primary">
                                <erp.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold">{erp.title}</h3>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <p className="text-muted-foreground mb-6">
                                {erp.desc}
                            </p>

                            <div className="mb-8 flex-1">
                                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                                <ul className="space-y-2">
                                    {erp.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/contact" className="w-full">
                                <Button className="w-full">
                                    Request Demo
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
