"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-12">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-blob mix-blend-screen"></div>
                <div className="absolute top-[20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-accent/20 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            </div>

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 px-3 text-sm text-primary backdrop-blur-md mb-8 hover:bg-white/10 transition-colors"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    <span className="font-medium">Synture Tech v2.0 is live</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-8 max-w-5xl mx-auto leading-[1.1]"
                >
                    Building Digital <br className="hidden md:block" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-accent animate-gradient-x bg-[length:200%_auto]">
                        Solutions That Scale
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto max-w-2xl text-muted-foreground text-lg sm:text-xl md:text-2xl mb-12 leading-relaxed"
                >
                    We engineer premium websites, robust ERP ecosystems, and custom software tailored to transform your business operations.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row justify-center gap-6 items-center"
                >
                    <Link href="/contact" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_-5px_var(--color-primary)] hover:shadow-[0_0_50px_-10px_var(--color-primary)] transition-all duration-300 font-semibold tracking-wide">
                            Start Your Project
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="#" className="w-full sm:w-auto">
                        <Button variant="ghost" size="lg" className="w-full sm:w-auto h-14 px-8 text-base rounded-full hover:bg-white/5 border border-transparent hover:border-white/10">
                            <PlayCircle className="mr-2 h-5 w-5 text-accent" />
                            Watch Showreel
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Decorative Glow at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
        </section>
    );
}
