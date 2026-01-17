import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ERPPreview } from "@/components/sections/ERPShowcase";
import { ProductsPreview } from "@/components/sections/ProductsPreview";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesOverview />
      <ERPPreview />
      <ProductsPreview />
      <CTA />
    </>
  );
}
