import { Coffee, Hotel, Scissors, ShoppingBag, ArrowRight, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products | Synture Tech",
    description: "Ready-made software products for retail, hospitality, and service businesses.",
};

const products = [
    {
        title: "Cafe Management System",
        icon: Coffee,
        desc: "A complete POS and management solution for cafes and coffee shops.",
        modules: ["Table Management", "Kitchen Display System (KDS)", "Recipe Management", "Inventory Control", "Loyalty Program"],
        priceStart: "Starts at $X/mo",
        image: "/product-cafe.png",
        bgClass: "bg-orange-500/5",
    },
    {
        title: "Hotel POS System",
        icon: Hotel,
        desc: "Streamline your hotel operations with our integrated property management system.",
        modules: ["Room Booking & Reservations", "Housekeeping Management", "Guest Check-in/out", "Restaurant Billing", "Channel Manager"],
        priceStart: "Starts at $X/mo",
        image: "/product-hotel.png",
        bgClass: "bg-blue-500/5",
    },
    {
        title: "Salon Management System",
        icon: Scissors,
        desc: "Manage appointments, staff, and clients effortlessly for salons and spas.",
        modules: ["Online Booking", "Staff Scheduling", "Client History", "POS & Billing", "Membership Implementation"],
        priceStart: "Starts at $X/mo",
        image: "/product-salon.png",
        bgClass: "bg-pink-500/5",
    },
    {
        title: "Retail POS System",
        icon: ShoppingBag,
        desc: "Fast and reliable billing software for retail stores and supermarkets.",
        modules: ["Barcode Scanning", "Stock Management", "GST/Tax Reports", "Multi-store Support", "Vendor Management"],
        priceStart: "Starts at $X/mo",
        image: "/product-retail.png",
        bgClass: "bg-teal-500/5",
    },
];

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 py-28">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Our Products</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Ready-to-deploy software solutions designed to get your business running immediately.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col lg:flex-row gap-6 p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all group">
                        <div className="lg:w-1/3 flex flex-col gap-4">
                            <div className={`aspect-square rounded-xl ${product.bgClass} flex items-center justify-center overflow-hidden border border-border/50`}>
                                <div className="relative w-full h-full p-4">
                                    <img
                                        src={product.image}
                                        alt={`${product.title} Interface`}
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <product.icon className="h-5 w-5" />
                                </div>
                                <h3 className="text-2xl font-bold">{product.title}</h3>
                            </div>

                            <p className="text-muted-foreground mb-6">
                                {product.desc}
                            </p>

                            <div className="mb-6 flex-1">
                                <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Key Modules</h4>
                                <div className="flex flex-wrap gap-2">
                                    {product.modules.map((module, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border">
                                            {module}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 mt-auto">
                                <Link href="/contact" className="flex-1">
                                    <Button className="w-full">Get Pricing</Button>
                                </Link>
                                <Link href="/contact" className="flex-1">
                                    <Button variant="outline" className="w-full">View Demo</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}
