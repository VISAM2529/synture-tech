"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const erpSolutions = [
    "College Management",
    "Pre-Primary & Nursery",
    "Hospital Administration",
    "Custom Enterprise Resource Planning"
];

export function ERPPreview() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Dark Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20"></div>
            <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-50"></div>

            <div className="container px-4 mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-sm text-accent mb-6">
                        <Zap className="h-3 w-3 fill-accent" /> Enterprise Grade
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 font-heading">
                        Power Your Operations with <span className="text-primary">Intelligence</span>
                    </h2>
                    <p className="text-muted-foreground text-xl mb-8 leading-relaxed">
                        Stop relying on spreadsheets. Our specialized ERP solutions bring admissions, billing, inventory, and HR into one unified, intelligent platform.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {erpSolutions.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                            >
                                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                                <span className="font-medium text-foreground/90">{item}</span>
                            </motion.div>
                        ))}
                    </div>

                    <Link href="/erp-solutions">
                        <Button size="lg" className="h-12 px-8 rounded-full shadow-lg shadow-primary/20">
                            Explore ERP Solutions
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="flex-1 w-full relative"
                >
                    {/* Dashboard Image */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/80 backdrop-blur-md group hover:scale-[1.02] transition-transform duration-500">
                        <img
                            src="/erp-dashboard.png"
                            alt="Synture Tech ERP Dashboard Interface"
                            className="w-full h-full object-cover object-top"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Background Decor Elements */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
                </motion.div>
            </div>
        </section>
    );
}
