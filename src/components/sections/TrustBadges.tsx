"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Award, Clock } from "lucide-react";

const stats = [
    { label: "Projects Delivered", value: "50+", icon: Briefcase },
    { label: "Happy Clients", value: "30+", icon: Users },
    { label: "Years Experience", value: "5+", icon: Clock },
    { label: "Industries Served", value: "10+", icon: Award },
];

export function TrustBadges() {
    return (
        <section className="py-12 border-y border-border/50 bg-secondary/30">
            <div className="container px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="p-3 bg-primary/10 rounded-full mb-3 text-primary">
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <span className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</span>
                            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider mt-1">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
