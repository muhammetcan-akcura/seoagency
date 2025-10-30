"use client"

import { useState } from "react"

interface ServiceData {
    title: string
    price: string
    priceNum: number
    features: string[]
    category: string
}

const servicesData: ServiceData[] = [

    {
        category: "Marketing Packages",
        title: "Micro Launch",
        price: "$100",
        priceNum: 100,
        features: [
            "1-week social media consulting",
            "1 promotional graphic design",
            "Basic audience targeting suggestions",
            "Performance overview report"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Startup Boost",
        price: "$250",
        priceNum: 250,
        features: [
            "Social profile optimization",
            "7-day organic growth campaign",
            "2 branded graphics",
            "Basic keyword and audience analysis"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Marketing Starter",
        price: "$500",
        priceNum: 500,
        features: [
            "Social Media Marketing Setup",
            "10 Days Organic Growth Campaign",
            "Basic SEO Optimization",
            "3 Branded Graphic Designs",
            "Competitor Research",
            "24/7 Email Support"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Growth Accelerator",
        price: "$1,000",
        priceNum: 1000,
        features: [
            "Complete Social Media Management (30 Days)",
            "SEO Optimization for 5 pages",
            "Ad Campaign Setup (Meta + Google)",
            "Advanced Analytics",
            "Basic Automation Setup",
            "Priority Support"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Business Expansion",
        price: "$2,000",
        priceNum: 2000,
        features: [
            "2-Month Content Strategy",
            "5 Ad Campaigns",
            "Conversion Rate Optimization",
            "Competitor Tracking Dashboard",
            "Brand Redesign Option",
            "Weekly Performance Calls"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Scale Pro",
        price: "$3,000",
        priceNum: 3000,
        features: [
            "3-Month Content Strategy Plan",
            "Cross-Platform Ad Management",
            "A/B Testing and CRO Optimization",
            "Advanced KPI Dashboard & Reporting",
            "2-Month Continuous Support"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Enterprise Plus",
        price: "$4,000",
        priceNum: 4000,
        features: [
            "Corporate-Level Brand Strategy",
            "Custom CRM Integration",
            "Full-Site SEO & Technical Optimization",
            "High-Budget Ad Campaign Management",
            "Monthly Strategy Meetings & Reports"
        ]
    },
    {
        category: "Marketing Packages",
        title: "Enterprise Domination",
        price: "$5,000",
        priceNum: 5000,
        features: [
            "Full Multi-Platform Marketing",
            "Advanced SEO (10+ pages)",
            "CRM & Marketing Automation",
            "AI-Based Optimization",
            "Custom Dashboard",
            "Dedicated Account Manager"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Web Design Starter",
        price: "$500",
        priceNum: 500,
        features: [
            "Up to 3 Pages",
            "Custom Responsive Design",
            "Mobile Optimization",
            "Basic SEO Setup",
            "Contact Form",
            "1 Week Delivery"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Professional Website",
        price: "$1,000",
        priceNum: 1000,
        features: [
            "Up to 6 Pages",
            "Unique UI/UX Design",
            "SEO-Ready Structure",
            "CMS Integration",
            "Basic Animations",
            "1 Month Maintenance"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Business Growth",
        price: "$1,800",
        priceNum: 1800,
        features: [
            "Up to 8 Pages",
            "Professional Design System",
            "Blog Setup & SEO Optimization",
            "Performance & Speed Enhancements",
            "Google Analytics Integration",
            "Ongoing Updates for 1 Month"
        ]
    },
    {
        category: "Web Design Packages",
        title: "E-Commerce Pro",
        price: "$2,000",
        priceNum: 2000,
        features: [
            "Up to 10 Product Pages",
            "Custom Online Store Design",
            "Secure Payment Gateway",
            "Product Management System",
            "Inventory & Order Tracking",
            "1 Month Free Support"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Creative Studio Website",
        price: "$2,800",
        priceNum: 2800,
        features: [
            "Up to 10 Custom Pages",
            "High-End Visual Design & Animations",
            "Portfolio & Case Studies Layouts",
            "Integrated Blog & CMS",
            "Image Optimization & Lazy Loading",
            "1.5-Month Maintenance"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Corporate Identity Site",
        price: "$3,500",
        priceNum: 3500,
        features: [
            "Up to 12 Pages",
            "Brand-Oriented Design",
            "Custom CMS & Dashboard",
            "Performance Optimization",
            "Team & Portfolio Sections",
            "1.5-Month Maintenance"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Premium Web Experience",
        price: "$5,000",
        priceNum: 5000,
        features: [
            "Up to 15 Custom Pages",
            "Advanced UI/UX",
            "Full Stack Development",
            "API Integrations",
            "Multilingual Support",
            "2-Month Maintenance"
        ]
    },
    {
        category: "Web Design Packages",
        title: "Enterprise Digital Suite",
        price: "$8,000",
        priceNum: 8000,
        features: [
            "Unlimited Pages",
            "Bespoke UI/UX with Motion Effects",
            "CRM & API Integration",
            "Advanced Security Setup",
            "Dedicated Project Manager",
            "3-Month Premium Support"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Starter Advertising",
        price: "$500",
        priceNum: 500,
        features: [
            "1 Platform Setup",
            "1 Campaign + 3 Ad Variations",
            "Keyword Research",
            "Ad Copywriting",
            "Conversion Tracking",
            "7-Day Optimization"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Growth Advertising",
        price: "$1,000",
        priceNum: 1000,
        features: [
            "2 Ad Platforms",
            "3 Campaigns + 10 Ads",
            "A/B Testing",
            "Retargeting Setup",
            "Weekly Optimization",
            "Dedicated Specialist"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Advanced Advertising",
        price: "$2,000",
        priceNum: 2000,
        features: [
            "3 Ad Platforms",
            "6 Campaigns + 20 Creatives",
            "Full Funnel Strategy",
            "Landing Page Optimization",
            "Competitor Research",
            "24/7 Support"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Business Expansion",
        price: "$1,500",
        priceNum: 1500,
        features: [
            "2 Platforms (Google + Meta)",
            "Up to 5 Campaigns",
            "Custom Audience Targeting",
            "Ad Budget Management",
            "Weekly Performance Reports",
            "Conversion Rate Optimization"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Brand Awareness Boost",
        price: "$2,800",
        priceNum: 2800,
        features: [
            "Multi-Platform Campaigns",
            "Video & Display Ads",
            "Advanced Audience Segmentation",
            "Creative Copywriting & Design",
            "Weekly A/B Testing",
            "2-Month Maintenance"
        ]
    },
    {
        category: "Advertising Packages",
        title: "E-Commerce Performance",
        price: "$3,500",
        priceNum: 3500,
        features: [
            "Google Shopping + Meta Ads",
            "Dynamic Retargeting",
            "Product Feed Optimization",
            "Sales Funnel Strategy",
            "Advanced Analytics Setup",
            "Dedicated Account Manager"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Premium Advertising Suite",
        price: "$5,000",
        priceNum: 5000,
        features: [
            "4 Ad Platforms (Google, Meta, TikTok, LinkedIn)",
            "Full-Funnel Campaigns",
            "Video, Display & Search Ads",
            "Competitor & Market Research",
            "Creative Production Team",
            "2-Month Optimization"
        ]
    },
    {
        category: "Advertising Packages",
        title: "Enterprise Marketing Accelerator",
        price: "$8,000",
        priceNum: 8000,
        features: [
            "All Major Platforms",
            "Unlimited Campaigns",
            "AI-Driven Optimization",
            "Custom Funnel Design",
            "Dedicated Ad Strategist & Designer",
            "3-Month Premium Support"
        ]
    },    {
        category: "SEO Packages",
        title: "Basic",
        price: "$10",
        priceNum: 10,
        features: [
            "Keyword Research (20 keywords)",
            "On-Page SEO Optimization",
            "Weekly Performance Reports",
            "Google Business Profile Optimization"
        ]
    },
    {
        category: "SEO Packages",
        title: "Starter",
        price: "$20",
        priceNum: 20,
        features: [
            "Keyword Research (30 keywords)",
            "On-Page SEO Optimization",
            "Social Media Content",
            "Weekly Performance Reports",
            "Google Business Profile Optimization",
            "Competitor Analysis"
        ]
    },
    {
        category: "SEO Packages",
        title: "Standard",
        price: "$50",
        priceNum: 50,
        features: [
            "Keyword Research (40 keywords)",
            "On-Page SEO Optimization",
            "Weekly Performance Reports",
            "Google Business Profile Optimization",
            "Competitor Analysis",
            "Technical SEO Audit"
        ]
    },
    {
        category: "SEO Packages",
        title: "Plus",
        price: "$100",
        priceNum: 100,
        features: [
            "Keyword Research (40 keywords)",
            "On-Page SEO Optimization",
            "Weekly Performance Reports",
            "Google Business Profile Optimization",
            "Competitor Analysis",
            "Technical SEO Audit",
            "Content Creation"
        ]
    },
    {
        category: "SEO Packages",
        title: "Advanced",
        price: "$150",
        priceNum: 150,
        features: [
            "Keyword Research (50 keywords)",
            "On-Page SEO Optimization",
            "Monthly Performance Reports",
            "Google Business Profile Optimization",
            "Competitor Analysis",
            "Technical SEO Audit",
            "Content Creation"
        ]
    },
    {
        category: "SEO Packages",
        title: "Pro",
        price: "$200",
        priceNum: 200,
        features: [
            "Keyword Research (60 keywords)",
            "On-Page SEO Optimization",
            "Monthly Performance Reports",
            "Google Business Profile Optimization",
            "Competitor Analysis",
            "Technical SEO Audit",
            "Content Creation",
            "Link Building"
        ]
    },
    {
        category: "SEO Packages",
        title: "Premium",
        price: "$250",
        priceNum: 250,
        features: [
            "Keyword Research (70 keywords)",
            "On-Page SEO Optimization",
            "Monthly Performance Reports",
            "Google Business Profile Optimization",
            "Competitor Analysis",
            "Technical SEO Audit",
            "Content Creation",
            "Link Building (5 links/month)"
        ]
    },
    {
        category: "SEO Packages",
        title: "Ultra",
        price: "$500",
        priceNum: 500,
        features: [
            "Keyword Research (80 keywords)",
            "On-Page SEO Optimization",
            "Monthly Performance Reports",
            "Google Business Profile Optimization",
            "Competitor Analysis",
            "Technical SEO Audit",
            "Content Creation (4 articles/month)",
            "Link Building (15 links/month)"
        ]
    },
    {
        category: "SEO Packages",
        title: "Max",
        price: "$750",
        priceNum: 750,
        features: [
            "Keyword Research (90 keywords)",
            "On-Page SEO Optimization",
            "Monthly Performance Reports",
            "Google Business Profile Optimization",
            "Competitor Analysis",
            "Technical SEO Audit",
            "Content Creation (8 articles/month)",
            "Link Building (30 links/month)"
        ]
    },
    {
        category: "SEO Packages",
        title: "Ultimate",
        price: "$1,000",
        priceNum: 1000,
        features: [
            "Keyword Research (100 keywords)",
            "On-Page SEO Optimization",
            "Monthly Performance Reports",
            "Google Business Profile Optimization",
            "Competitor Analysis",
            "Technical SEO Audit",
            "Content Creation (12 articles/month)",
            "Link Building (60 links/month)"
        ]
    },
];

const PaymentMethodModal = ({
    service,
    onClose,
    onSelectStripe,
    onSelectPayoneer,
}: {
    service: ServiceData
    onClose: () => void
    onSelectStripe: () => void
    onSelectPayoneer: () => void
}) => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: "16px",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "16px",
                    maxWidth: "500px",
                    width: "100%",
                    padding: "32px",
                }}
            >
                <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}
                >
                    <div>
                        <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#111827" }}>Select Payment Method</h3>
                        <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>
                            Choose how you want to pay for {service.title}
                        </p>
                    </div>
                    <button onClick={onClose} style={{ color: "#9ca3af", border: "none", background: "none", cursor: "pointer" }}>
                        <svg style={{ width: "24px", height: "24px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <button
                        onClick={onSelectStripe}
                        style={{
                            width: "100%",
                            padding: "20px",
                            border: "2px solid #e5e7eb",
                            borderRadius: "12px",
                            backgroundColor: "white",
                            cursor: "pointer",
                            transition: "all 0.3s",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#9333ea"
                            e.currentTarget.style.backgroundColor = "#f9fafb"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "#e5e7eb"
                            e.currentTarget.style.backgroundColor = "white"
                        }}
                    >
                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                backgroundColor: "#f3e8ff",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <svg
                                style={{ width: "24px", height: "24px", color: "#9333ea" }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                            </svg>
                        </div>
                        <div style={{ textAlign: "left", flex: 1 }}>
                            <h4 style={{ fontSize: "18px", fontWeight: "bold", color: "#111827", marginBottom: "4px" }}>Stripe</h4>
                            <p style={{ fontSize: "14px", color: "#6b7280" }}>Pay instantly with credit card</p>
                        </div>
                        <svg
                            style={{ width: "20px", height: "20px", color: "#9ca3af" }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <button
                        onClick={onSelectPayoneer}
                        style={{
                            width: "100%",
                            padding: "20px",
                            border: "2px solid #e5e7eb",
                            borderRadius: "12px",
                            backgroundColor: "white",
                            cursor: "pointer",
                            transition: "all 0.3s",
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#9333ea"
                            e.currentTarget.style.backgroundColor = "#f9fafb"
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "#e5e7eb"
                            e.currentTarget.style.backgroundColor = "white"
                        }}
                    >
                        <div
                            style={{
                                width: "48px",
                                height: "48px",
                                backgroundColor: "#fef3c7",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <svg
                                style={{ width: "24px", height: "24px", color: "#f59e0b" }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </div>
                        <div style={{ textAlign: "left", flex: 1 }}>
                            <h4 style={{ fontSize: "18px", fontWeight: "bold", color: "#111827", marginBottom: "4px" }}>Payoneer</h4>
                            <p style={{ fontSize: "14px", color: "#6b7280" }}>Manual payment via WhatsApp</p>
                        </div>
                        <svg
                            style={{ width: "20px", height: "20px", color: "#9ca3af" }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

const PayoneerContactModal = ({ service, onClose }: { service: ServiceData; onClose: () => void }) => {
    const whatsappNumber = "1234567890" // Replace with your WhatsApp number
    const message = `Hi, I'm interested in the ${service.title} package (${service.price}/month) and would like to pay via Payoneer.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: "16px",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "16px",
                    maxWidth: "500px",
                    width: "100%",
                    padding: "32px",
                }}
            >
                <div
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}
                >
                    <div>
                        <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#111827" }}>Contact Us for Payoneer Payment</h3>
                        <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>
                            We&apos;ll guide you through the manual payment process
                        </p>
                    </div>
                    <button onClick={onClose} style={{ color: "#9ca3af", border: "none", background: "none", cursor: "pointer" }}>
                        <svg style={{ width: "24px", height: "24px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div style={{ backgroundColor: "#f9fafb", padding: "20px", borderRadius: "12px", marginBottom: "24px" }}>
                    <h4 style={{ fontWeight: 600, color: "#111827", marginBottom: "12px" }}>Selected Package</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                        <span style={{ color: "#6b7280" }}>{service.title}</span>
                        <span style={{ fontWeight: 600, color: "#9333ea" }}>{service.price}/month</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "12px" }}>
                        Click the button below to contact us via WhatsApp. We&apos;ll provide you with our Payoneer details and guide you
                        through the payment process.
                    </p>
                </div>

                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "12px",
                        width: "100%",
                        backgroundColor: "#25D366",
                        color: "white",
                        fontWeight: 600,
                        padding: "16px",
                        borderRadius: "12px",
                        border: "none",
                        cursor: "pointer",
                        textDecoration: "none",
                        transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#20BA5A"
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#25D366"
                    }}
                >
                    <svg style={{ width: "24px", height: "24px" }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Contact Us on WhatsApp
                </a>

                <p style={{ fontSize: "12px", color: "#9ca3af", textAlign: "center", marginTop: "16px" }}>
                    Our team will respond within 24 hours
                </p>
            </div>
        </div>
    )
}

const CheckoutModal = ({ service, onClose }: { service: ServiceData; onClose: () => void }) => {
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const [cardNumber, setCardNumber] = useState("")
    const [expiry, setExpiry] = useState("")
    const [cvc, setCvc] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const serviceFee = service.priceNum * 0.06
    const totalAmount = service.priceNum + serviceFee

    const handleCardChange = (value: string) => {
        const clean = value.replace(/\s/g, "")
        const formatted = clean.match(/.{1,4}/g)?.join(" ") || clean
        setCardNumber(formatted.slice(0, 19))
    }

    const handleExpiryChange = (value: string) => {
        const clean = value.replace(/\D/g, "")
        const formatted = clean.length >= 2 ? `${clean.slice(0, 2)}/${clean.slice(2, 4)}` : clean
        setExpiry(formatted)
    }

    const handleCvcChange = (value: string) => {
        setCvc(value.replace(/\D/g, "").slice(0, 3))
    }

    const isStep1Valid = name.length > 0 && email.includes("@")
    const isStep2Valid = cardNumber.replace(/\s/g, "").length === 16 && expiry.length === 5 && cvc.length === 3

    const handlePayment = async () => {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        setLoading(false)
        setSuccess(true)
        setTimeout(() => onClose(), 3000)
    }

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                padding: "16px",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "16px",
                    maxWidth: "500px",
                    width: "100%",
                    maxHeight: "90vh",
                    overflowY: "auto",
                }}
            >
                {success ? (
                    <div style={{ padding: "32px", textAlign: "center" }}>
                        <div
                            style={{
                                margin: "0 auto 16px",
                                width: "64px",
                                height: "64px",
                                backgroundColor: "#dcfce7",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <svg
                                style={{ width: "32px", height: "32px", color: "#16a34a" }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#111827", marginBottom: "8px" }}>
                            Payment Successful!
                        </h3>
                        <p style={{ color: "#6b7280" }}>
                            Your order for <span style={{ fontWeight: 600 }}>{service.title}</span> has been confirmed.
                        </p>
                    </div>
                ) : (
                    <>
                        <div style={{ padding: "24px", borderBottom: "1px solid #e5e7eb" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <div>
                                    <h3 style={{ fontSize: "24px", fontWeight: "bold", color: "#111827" }}>{service.title}</h3>
                                    <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>{service.category}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    style={{ color: "#9ca3af", border: "none", background: "none", cursor: "pointer" }}
                                >
                                    <svg style={{ width: "24px", height: "24px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", marginTop: "24px" }}>
                                <div style={{ display: "flex", alignItems: "center", color: step >= 1 ? "#9333ea" : "#9ca3af" }}>
                                    <div
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: step >= 1 ? "#9333ea" : "#e5e7eb",
                                            color: step >= 1 ? "white" : "#6b7280",
                                        }}
                                    >
                                        1
                                    </div>
                                    <span style={{ marginLeft: "8px", fontSize: "14px", fontWeight: 500 }}>Contact</span>
                                </div>
                                <div style={{ flex: 1, height: "2px", backgroundColor: "#e5e7eb", margin: "0 16px" }}></div>
                                <div style={{ display: "flex", alignItems: "center", color: step >= 2 ? "#9333ea" : "#9ca3af" }}>
                                    <div
                                        style={{
                                            width: "32px",
                                            height: "32px",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            backgroundColor: step >= 2 ? "#9333ea" : "#e5e7eb",
                                            color: step >= 2 ? "white" : "#6b7280",
                                        }}
                                    >
                                        2
                                    </div>
                                    <span style={{ marginLeft: "8px", fontSize: "14px", fontWeight: 500 }}>Payment</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: "24px" }}>
                            {step === 1 && (
                                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                color: "#374151",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            style={{
                                                width: "100%",
                                                padding: "8px 16px",
                                                border: "1px solid #d1d5db",
                                                borderRadius: "8px",
                                                fontSize: "16px",
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                color: "#374151",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            style={{
                                                width: "100%",
                                                padding: "8px 16px",
                                                border: "1px solid #d1d5db",
                                                borderRadius: "8px",
                                                fontSize: "16px",
                                            }}
                                        />
                                    </div>
                                    <button
                                        onClick={() => setStep(2)}
                                        disabled={!isStep1Valid}
                                        style={{
                                            width: "100%",
                                            background: "linear-gradient(to right, #9333ea, #2563eb)",
                                            color: "white",
                                            fontWeight: 600,
                                            padding: "12px",
                                            borderRadius: "8px",
                                            border: "none",
                                            cursor: isStep1Valid ? "pointer" : "not-allowed",
                                            opacity: isStep1Valid ? 1 : 0.5,
                                        }}
                                    >
                                        Continue to Payment
                                    </button>
                                </div>
                            )}

                            {step === 2 && (
                                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                    <div>
                                        <label
                                            style={{
                                                display: "block",
                                                fontSize: "14px",
                                                fontWeight: 500,
                                                color: "#374151",
                                                marginBottom: "4px",
                                            }}
                                        >
                                            Card Number
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="1234 5678 9012 3456"
                                            value={cardNumber}
                                            onChange={(e) => handleCardChange(e.target.value)}
                                            style={{
                                                width: "100%",
                                                padding: "8px 16px",
                                                border: "1px solid #d1d5db",
                                                borderRadius: "8px",
                                                fontSize: "16px",
                                            }}
                                        />
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "14px",
                                                    fontWeight: 500,
                                                    color: "#374151",
                                                    marginBottom: "4px",
                                                }}
                                            >
                                                Expiry
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="MM/YY"
                                                value={expiry}
                                                onChange={(e) => handleExpiryChange(e.target.value)}
                                                style={{
                                                    width: "100%",
                                                    padding: "8px 16px",
                                                    border: "1px solid #d1d5db",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <label
                                                style={{
                                                    display: "block",
                                                    fontSize: "14px",
                                                    fontWeight: 500,
                                                    color: "#374151",
                                                    marginBottom: "4px",
                                                }}
                                            >
                                                CVC
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="123"
                                                value={cvc}
                                                onChange={(e) => handleCvcChange(e.target.value)}
                                                style={{
                                                    width: "100%",
                                                    padding: "8px 16px",
                                                    border: "1px solid #d1d5db",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ backgroundColor: "#f9fafb", padding: "16px", borderRadius: "8px" }}>
                                        <h4 style={{ fontWeight: 600, color: "#111827", marginBottom: "12px" }}>Order Summary</h4>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                fontSize: "14px",
                                                marginBottom: "8px",
                                            }}
                                        >
                                            <span style={{ color: "#6b7280" }}>Service Price</span>
                                            <span style={{ fontWeight: 500 }}>{service.price}</span>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                fontSize: "14px",
                                                marginBottom: "12px",
                                            }}
                                        >
                                            <span style={{ color: "#6b7280" }}>Service Fee (6%)</span>
                                            <span style={{ fontWeight: 500 }}>${serviceFee.toFixed(2)}</span>
                                        </div>
                                        <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "8px" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <span style={{ fontWeight: 600, color: "#111827" }}>Total</span>
                                                <span style={{ fontWeight: 700, color: "#9333ea", fontSize: "18px" }}>
                                                    ${totalAmount.toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", gap: "12px" }}>
                                        <button
                                            onClick={() => setStep(1)}
                                            style={{
                                                flex: 1,
                                                backgroundColor: "#e5e7eb",
                                                color: "#374151",
                                                fontWeight: 600,
                                                padding: "12px",
                                                borderRadius: "8px",
                                                border: "none",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={handlePayment}
                                            disabled={!isStep2Valid || loading}
                                            style={{
                                                flex: 1,
                                                background: "linear-gradient(to right, #9333ea, #2563eb)",
                                                color: "white",
                                                fontWeight: 600,
                                                padding: "12px",
                                                borderRadius: "8px",
                                                border: "none",
                                                cursor: !isStep2Valid || loading ? "not-allowed" : "pointer",
                                                opacity: !isStep2Valid || loading ? 0.5 : 1,
                                            }}
                                        >
                                            {loading ? "Processing..." : `Pay $${totalAmount.toFixed(2)}`}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

const PricingPage = () => {
    const [selectedService, setSelectedService] = useState<ServiceData | null>(null)
    const [showPaymentMethod, setShowPaymentMethod] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false)
    const [showPayoneerContact, setShowPayoneerContact] = useState(false)
    const categories = Array.from(new Set(servicesData.map((s) => s.category)))

    const handleGetStarted = (service: ServiceData) => {
        setSelectedService(service)
        setShowPaymentMethod(true)
    }

    const handleSelectStripe = () => {
        setShowPaymentMethod(false)
        setShowCheckout(true)
    }

    const handleSelectPayoneer = () => {
        setShowPaymentMethod(false)
        setShowPayoneerContact(true)
    }

    const handleCloseAll = () => {
        setSelectedService(null)
        setShowPaymentMethod(false)
        setShowCheckout(false)
        setShowPayoneerContact(false)
    }

    return (
        <div id="pricing" style={{ background: "linear-gradient(to bottom, #f9fafb, white)", minHeight: "100vh" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 16px" }}>
                <div style={{ textAlign: "center", marginBottom: "64px" }}>
                    <h1
                        style={{
                            fontSize: "3.75rem",
                            fontWeight: "bold",
                            marginBottom: "16px",
                            background: "linear-gradient(to right, #9333ea, #2563eb)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Pricing Plans
                    </h1>
                    <p style={{ fontSize: "18px", color: "#6b7280", maxWidth: "672px", margin: "0 auto" }}>
                        Choose the perfect package. All packages include 6% service fee.
                    </p>
                </div>

                {categories.map((category, catIndex) => (
                    <div key={catIndex} style={{ marginBottom: "80px" }}>
                        <h2
                            style={{
                                fontSize: "2.25rem",
                                fontWeight: "bold",
                                textAlign: "center",
                                marginBottom: "48px",
                                color: "#111827",
                            }}
                        >
                            {category}
                        </h2>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                gap: "24px",
                            }}
                        >
                            {servicesData
                                .filter((service) => service.category === category)
                                .map((service, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            backgroundColor: "white",
                                            border: "2px solid #e5e7eb",
                                            borderRadius: "16px",
                                            padding: "24px",
                                            display: "flex",
                                            flexDirection: "column",
                                            transition: "all 0.3s",
                                            cursor: "pointer",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = "#9333ea"
                                            e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                                            e.currentTarget.style.transform = "translateY(-8px)"
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = "#e5e7eb"
                                            e.currentTarget.style.boxShadow = "none"
                                            e.currentTarget.style.transform = "translateY(0)"
                                        }}
                                    >
                                        <h4 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px", color: "#111827" }}>
                                            {service.title}
                                        </h4>

                                        <div style={{ marginBottom: "16px" }}>
                                            <span style={{ fontSize: "36px", fontWeight: "bold", color: "#9333ea" }}>{service.price}</span>
                                            <span style={{ color: "#6b7280", fontSize: "14px", marginLeft: "4px" }}>/month</span>
                                        </div>

                                        <div style={{ flex: 1, marginBottom: "24px" }}>
                                            {service.features.map((feature, i) => (
                                                <div key={i} style={{ display: "flex", alignItems: "flex-start", marginBottom: "12px" }}>
                                                    <div
                                                        style={{
                                                            width: "20px",
                                                            height: "20px",
                                                            borderRadius: "50%",
                                                            backgroundColor: "#f3e8ff",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            flexShrink: 0,
                                                            marginTop: "2px",
                                                        }}
                                                    >
                                                        <svg
                                                            style={{ width: "12px", height: "12px", color: "#9333ea" }}
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span style={{ marginLeft: "12px", fontSize: "14px", color: "#374151" }}>{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => handleGetStarted(service)}
                                            style={{
                                                width: "100%",
                                                background: "linear-gradient(to right, #9333ea, #2563eb)",
                                                color: "white",
                                                fontWeight: 600,
                                                padding: "12px",
                                                borderRadius: "8px",
                                                border: "none",
                                                cursor: "pointer",
                                                transition: "all 0.3s",
                                            }}
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>

            {selectedService && showPaymentMethod && (
                <PaymentMethodModal
                    service={selectedService}
                    onClose={handleCloseAll}
                    onSelectStripe={handleSelectStripe}
                    onSelectPayoneer={handleSelectPayoneer}
                />
            )}

            {selectedService && showCheckout && <CheckoutModal service={selectedService} onClose={handleCloseAll} />}

            {selectedService && showPayoneerContact && (
                <PayoneerContactModal service={selectedService} onClose={handleCloseAll} />
            )}
        </div>
    )
}

export default PricingPage