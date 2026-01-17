"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Monitor, Smartphone, Cog, Database, LayoutDashboard, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
    {
        id: 1,
        title: "Website Development",
        description: "High-performance digital experiences built with Next.js.",
        image: "/service-web.png",
        icon: Monitor,
    },
    {
        id: 2,
        title: "Mobile Applications",
        description: "Native Android & iOS apps with stunning UI/UX.",
        image: "/service-mobile.png",
        icon: Smartphone,
    },
    {
        id: 3,
        title: "Custom Software",
        description: "Tailored engineering for complex business logic.",
        image: "/service-custom.png",
        icon: Cog,
    },
    {
        id: 4,
        title: "ERP Ecosystems",
        description: "Unified management for Schools, Hospitals & Enterprises.",
        image: "/service-erp.png",
        icon: Database,
    },
    {
        id: 5,
        title: "CRM Solutions",
        description: "Intelligent customer relationship management tools.",
        image: "/service-crm.png",
        icon: LayoutDashboard,
    },
    {
        id: 6,
        title: "API Integration",
        description: "Seamless connectivity between your digital systems.",
        image: "/service-api.png",
        icon: Server,
    },
];

export function ServicesOverview() {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <section className="py-24 bg-background relative overflow-hidden min-h-[90vh] flex items-center" id="services">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,100,255,0.05),transparent_60%)] pointer-events-none"></div>

            <div className="container px-4 mx-auto relative z-10 flex flex-col lg:flex-row gap-12 items-center">

                {/* Left Side: The List */}
                <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold font-heading mb-4 tracking-tight">Our Expertise</h2>
                        <div className="h-1 w-20 bg-primary rounded-full"></div>
                    </div>

                    <div className="flex flex-col">
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                initial={false}
                                className={cn(
                                    "group flex items-center justify-between p-6 rounded-2xl cursor-pointer transition-all duration-300 border border-transparent",
                                    activeService.id === service.id
                                        ? "bg-secondary/40 border-primary/10"
                                        : "hover:bg-secondary/20 hover:border-white/5"
                                )}
                                onMouseEnter={() => setActiveService(service)}
                            >
                                <div className="flex items-center gap-6">
                                    <div className={cn(
                                        "p-3 rounded-xl transition-colors duration-300",
                                        activeService.id === service.id ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-white/5 text-muted-foreground group-hover:bg-white/10 group-hover:text-primary"
                                    )}>
                                        <service.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className={cn(
                                            "text-xl font-bold font-heading mb-1 transition-colors",
                                            activeService.id === service.id ? "text-primary" : "text-foreground"
                                        )}>
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm font-medium">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                <ArrowRight className={cn(
                                    "h-5 w-5 transition-all duration-300 opacity-0 -translate-x-4",
                                    activeService.id === service.id && "opacity-100 translate-x-0 text-primary"
                                )} />
                            </motion.div>
                        ))}
                    </div>

                    <Link href="/services" className="mt-8 ml-6 text-primary font-semibold hover:underline flex items-center gap-2">
                        View All Capabilities <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Right Side: The Preview Card */}
                <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 hidden lg:block bg-secondary/5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService.id}
                            initial={{ opacity: 0, scale: 1.05, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image
                                src={activeService.image}
                                alt={activeService.title}
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>

                            {/* Floating Info content at bottom of image */}
                            <div className="absolute bottom-10 left-10 right-10 z-20">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white/90 dark:bg-black/60 backdrop-blur-xl border border-zinc-200 dark:border-white/20 p-6 rounded-2xl shadow-2xl"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <activeService.icon className="h-6 w-6 text-primary" />
                                        <h4 className="text-2xl font-bold text-zinc-900 dark:text-white font-heading">{activeService.title}</h4>
                                    </div>
                                    <p className="text-zinc-600 dark:text-white/80 leading-relaxed font-medium">
                                        Experience synthesize technology with our top-tier {activeService.title.toLowerCase()} service. We ensure scalability and performance at every step.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
