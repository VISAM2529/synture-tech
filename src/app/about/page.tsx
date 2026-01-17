import { Rocket, Target, Heart, Zap, Globe, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Synture Tech",
    description: "Learn about Synture Tech's mission, vision, and core values.",
};

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-secondary/30 text-center px-4">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                    About <span className="text-primary">Synture Tech</span>
                </h1>
                <p className="mx-auto max-w-2xl text-muted-foreground text-lg sm:text-xl">
                    We are a team of passionate technologists dedicated to building scalable digital solutions that drive business growth.
                </p>
            </section>

            {/* Our Story / Vision / Mission */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
                        <p className="text-lg text-muted-foreground mb-4">
                            Founded with a vision to bridge the gap between complex technology and business needs, Synture Tech started as a small team of developers. Today, we have grown into a full-service software development agency serving clients across various industries.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            We believe in the power of code to solve real-world problems. Whether it's streamlining school operations with our ERPs or helping startups launch their MVP, we bring the same level of commitment and excellence to every project.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                            <Rocket className="h-8 w-8 text-primary mb-4" />
                            <h3 className="tex-xl font-bold mb-2">Our Mission</h3>
                            <p className="text-muted-foreground">To empower businesses with innovative technology that simplifies operations and accelerates growth.</p>
                        </div>
                        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                            <Target className="h-8 w-8 text-accent mb-4" />
                            <h3 className="tex-xl font-bold mb-2">Our Vision</h3>
                            <p className="text-muted-foreground">To be the global leader in digital transformation, known for quality, reliability, and innovation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-secondary/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Core Values</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our culture is built on these fundamental principles.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Innovation", icon: Zap, desc: "We constantly push boundaries and embrace new technologies." },
                            { title: "Quality", icon: AwardIcon, desc: "We never settle for good enough. Excellence is our standard." },
                            { title: "Integrity", icon: Heart, desc: "We build trust through transparency and honest communication." },
                            { title: "Collaboration", icon: Users, desc: "We work closely with our clients as partners in their success." },
                        ].map((value, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-6 bg-background rounded-xl">
                                <div className="p-3 bg-primary/10 rounded-full mb-4 text-primary">
                                    <value.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-muted-foreground">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline (Simplified) */}
            <section className="py-20 container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
                <div className="max-w-3xl mx-auto border-l-2 border-primary/30 pl-8 space-y-12">
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary"></span>
                        <span className="text-sm font-bold text-primary mb-1 block">2023</span>
                        <h3 className="text-xl font-bold">Company Founded</h3>
                        <p className="text-muted-foreground mt-2">Synture Tech was established with a small team of 3 developers.</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary"></span>
                        <span className="text-sm font-bold text-primary mb-1 block">2024</span>
                        <h3 className="text-xl font-bold">Launched First ERP</h3>
                        <p className="text-muted-foreground mt-2">Successfully deployed our flagship College ERP system to 5 institutions.</p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary"></span>
                        <span className="text-sm font-bold text-primary mb-1 block">2025</span>
                        <h3 className="text-xl font-bold">Expansion & Growth</h3>
                        <p className="text-muted-foreground mt-2">Expanded team to 20+ members and launched retail POS products.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

function AwardIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
    )
}
