import Link from "next/link";
import { Rocket, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-secondary/50 border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-primary p-1.5 rounded-lg">
                                <Rocket className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold">Synture Tech</span>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Building Digital Solutions That Scale. We transform ideas into enterprise-grade software.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Solution Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Solutions</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/erp-solutions" className="text-muted-foreground hover:text-primary transition-colors">ERP Systems</Link></li>
                            <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">POS Products</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Custom Development</Link></li>
                            <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Mobile Apps</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Company</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Support</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-6">Contact</h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                                <span>Audumber Nivya Building, Dhayari Narhe Rd, Narhe, Pune, Maharashtra 411041</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="h-5 w-5 shrink-0 text-primary" />
                                <span>+91 84215 39304</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="h-5 w-5 shrink-0 text-primary" />
                                <span>hello@synture.tech</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Synture Tech. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-foreground">Privacy</Link>
                        <Link href="#" className="hover:text-foreground">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
