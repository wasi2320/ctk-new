import React from "react";
import NonProfitSection from "@/app/components/sections/nonProfit/NonProfitSection";
import NonProfitStatsSection from "@/app/components/sections/nonProfit/statsSection";
import EmpoweringSection from "@/app/components/sections/nonProfit/EmpoweringSection";
import DifferentiateSection from "@/app/components/sections/nonProfit/DifferentiateSection";
import OurPortfolioSection from "@/app/components/sections/nonProfit/OurPortfolioSection";
import ContactUsSection from "@/app/components/sections/ContactUsSection";

export default function NonProfitsPage() {
    return (
        <>
            <NonProfitSection />
            <NonProfitStatsSection />
            <EmpoweringSection />
            <DifferentiateSection />
            <OurPortfolioSection />
            <ContactUsSection />
        </>
    );
} 