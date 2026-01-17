"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
    {
        name: "Cafe POS",
        desc: "Complete management for cafes.",
        image: "/product-cafe.png",
        color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    },
    {
        name: "Hotel System",
        desc: "Booking & Room service suite.",
        image: "/product-hotel.png",
        color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
        name: "Salon Manager",
        desc: "Scheduling & Client history.",
        image: "/product-salon.png",
        color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    },
    {
        name: "Retail Billing",
        desc: "Inventory & Fast billing POS.",
        image: "/product-retail.png",
        color: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    },
];

export function ProductsPreview() {
    return (
        <section className="py-24 container mx-auto px-4 relative">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -z-10 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>

            <div className="mb-16 text-center max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary mb-4"
                >
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium text-muted-foreground">Ready-to-Deploy Solutions</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 font-heading"
                >
                    Digital <span className="text-primary">Products</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground text-lg leading-relaxed"
                >
                    Accelerate your business setup with our reliable, pre-built software products designed for speed and scale.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white dark:bg-slate-900 border border-zinc-100 dark:border-white/10 rounded-3xl p-6 shadow-xl shadow-zinc-200/50 dark:shadow-none hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-square mb-6 rounded-2xl bg-slate-50 dark:bg-white/5 overflow-hidden flex items-center justify-center p-4">
                            {/* Reusing existing images if generated 3d ones fail, but logic handles paths */}
                            <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl font-bold font-heading text-zinc-900 dark:text-white">{product.name}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                                {product.desc}
                            </p>

                            <div className="pt-4 flex items-center justify-between">
                                <Link href="/products" className="text-primary text-sm font-semibold flex items-center gap-1 group/link">
                                    Learn more
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Link href="/products">
                    <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
                        Explore All Products
                    </Button>
                </Link>
            </div>
        </section>
    );
}
