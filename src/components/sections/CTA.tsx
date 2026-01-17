"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-primary z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] opacity-10"></div>
                <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-accent/30 to-transparent"></div>
            </div>

            <div className="container px-4 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 mb-8 backdrop-blur-sm"
                >
                    <Sparkles className="h-4 w-4 text-yellow-300" />
                    <span className="text-sm font-medium">Limited Availability for New Projects</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6 text-white font-heading"
                >
                    Ready to Transform Your Business?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mx-auto max-w-2xl text-indigo-100 text-xl mb-10 leading-relaxed"
                >
                    Let's discuss how Synture Tech can help you build scalable digital solutions. Get a free consultation today.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link href="/contact">
                        <Button size="lg" variant="secondary" className="h-16 px-10 text-lg font-bold shadow-2xl hover:shadow-white/20 transition-all rounded-full border-4 border-white/10 group relative overflow-hidden bg-white text-primary hover:bg-white/90">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            <span className="flex items-center gap-2">
                                Start Your Project
                                <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
