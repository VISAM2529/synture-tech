"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "ERP Solutions", href: "/erp-solutions" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Check if current route is homepage to adjust transparency if needed
    const isHome = pathname === "/";

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "w-full max-w-5xl rounded-full border transition-all duration-300 flex items-center justify-between px-4 py-3 md:px-6",
                    scrolled
                        ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-lg"
                        : "bg-background/20 backdrop-blur-md border-transparent md:border-white/10"
                )}
            >
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-gradient-to-br from-primary to-accent p-1.5 rounded-lg shadow-lg shadow-primary/20">
                        <Rocket className="h-5 w-5 text-white" fill="white" />
                    </div>
                    <span className="text-lg font-bold tracking-tight font-heading">Synture<span className="text-primary">Tech</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-secondary/50",
                                pathname === link.href ? "text-primary bg-secondary/80 font-semibold" : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-5 w-5 dark:hidden" />
                        <Moon className="absolute h-5 w-5 hidden dark:block" />
                    </Button>
                    <Link href="/contact">
                        <Button className="rounded-full px-6 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 shadow-md shadow-primary/20 border-0">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-5 w-5 dark:hidden" />
                        <Moon className="absolute h-5 w-5 hidden dark:block" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="absolute top-[120%] left-0 right-0 p-2"
                        >
                            <div className="bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-xl p-4 flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "px-4 py-3 rounded-xl text-base font-medium transition-colors hover:bg-secondary",
                                            pathname === link.href ? "bg-secondary/50 text-primary" : "text-foreground"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full mt-2 rounded-xl" size="lg">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.header>
        </div>
    );
}
