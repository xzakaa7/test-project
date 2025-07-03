import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    Mail,
    Instagram,
    Smartphone,
    Settings,
    Globe,
    MessageCircle,
} from "lucide-react";
import bannerImage from "./banner.png";
import Navbar from "./Navbar";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ComparisonTableSection from "./ComparisonTableSection";
import HowItWorksSection from "./HowItWorksSection";
import FeaturesSection from "./FeaturesSection";
import MockupSection from "./MockupSection";
import TestimonialsSection from "./TestimonialsSection";
import PaketSection from "./PaketSection";
import ContactSection from "./ContactSection";
import PrivacySection from "./PrivacySection";
import FloatingWAButton from "./FloatingWAButton";
import Footer from "./Footer";

// Salin styles dari Banner1.jsx
const styles = {
    wrapper: `w-full min-h-screen bg-[#fcfcfd] font-poppins`,
    navbar: `
        fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-300
        flex justify-between items-center
    `,
    navbarTransparent: `
        bg-transparent shadow-none backdrop-blur-0
    `,
    navbarSolid: `
        bg-white/90 shadow-md backdrop-blur-sm
    `,
    logo: `
        flex items-center gap-2 text-2xl font-bold tracking-tight text-[#6c47ff] font-poppins
    `,
    navLinks: `
        hidden md:flex items-center gap-8
    `,
    navLink: `
        text-[#22223b] font-semibold text-base tracking-wide hover:text-[#6c47ff] transition
        relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-[#6c47ff] after:transition-all after:duration-300 hover:after:w-full after:mt-1 font-poppins
    `,
    navActions: `
        flex items-center gap-3
    `,
    signInBtn: `
        bg-[#6c47ff] hover:bg-[#4b2fd6] text-white px-5 py-2 rounded-lg font-semibold shadow transition font-poppins
    `,
    joinBtn: `
        bg-white border border-[#6c47ff] text-[#6c47ff] px-5 py-2 rounded-lg font-semibold shadow transition font-poppins hover:bg-[#f3f4f6]
    `,
    homeSection: `
        w-full min-h-screen flex flex-col md:flex-row items-stretch justify-between relative bg-[#fcfcfd] pt-24 md:pt-0
    `,
    homeLeft: `
        flex-1 flex flex-col items-start justify-center px-8 md:pl-24 z-10 py-16 md:py-0
    `,
    homeTitle: `
    font-poppins font-extrabold leading-tight 
    text-[#6c47ff]
    text-4xl sm:text-6xl md:text-7xl lg:text-8xl
    text-left
    mt-6 md:mt-12 mb-4
    animate__animated animate__fadeInDown
    w-full
`,

    homeTitleSub: `
    font-poppins font-semibold tracking-wide
    text-[#1a4fa3]
    text-xl sm:text-2xl md:text-3xl
    text-left
    mb-6
    w-full
`,

    homeDesc: `
    font-poppins text-[#22223b] opacity-90
    text-lg sm:text-xl md:text-2xl
    text-left
    mb-10 max-w-2xl
    animate__animated animate__fadeIn
    w-full
`,

    homeButton: `
        font-poppins bg-gradient-to-r from-[#6c47ff] to-[#1a4fa3] hover:from-[#4b2fd6] hover:to-[#1a4fa3]
        text-white font-semibold px-7 py-3 rounded shadow-md hover:shadow-lg transition duration-300 text-base sm:text-lg
        tracking-wide animate__animated animate__fadeInUp
    `,
    homeBannerBg: `
        hidden md:block absolute top-0 right-0 h-full w-1/2 z-0
        animate__animated animate__zoomIn
    `,
    homeBannerImg: `
        w-full h-full object-cover object-[98%_center]
        select-none pointer-events-none
    `,
    bgCircle: `
        absolute -top-24 -left-24 w-[300px] h-[300px] bg-gradient-to-br from-[#eaf1ff] via-[#e6e6ff] to-white rounded-full opacity-60 blur-2xl z-0
        animate__animated animate__fadeIn
    `,
    bgCircle2: `
        absolute bottom-0 right-0 w-[200px] h-[200px] bg-gradient-to-tr from-[#e6e6ff] via-[#eaf1ff] to-white rounded-full opacity-40 blur-2xl z-0
        animate__animated animate__fadeIn
    `,
    footer: `text-center text-sm py-6 bg-gray-900 text-gray-400 font-poppins`,
};

// Salin navMenus, features, testimonials dari Banner1.jsx
const navMenus = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Pricing", id: "paket" },
    { label: "Contact", id: "kontak" },
];

const features = [
    { icon: <Settings size={36} />, title: "Lapor Cepat" },
    { icon: <Globe size={36} />, title: "Responsif" },
    { icon: <Smartphone size={36} />, title: "User Friendly" },
    { icon: <MessageCircle size={36} />, title: "Saling Terhubung" },
];

const testimonials = [
    {
        name: "Budi Santoso",
        comment:
            "Aplikasinya mudah digunakan dan sangat membantu menyampaikan aspirasi.",
    },
    {
        name: "Siti Aminah",
        comment:
            "Sekarang bisa lapor masalah jalan rusak tanpa ribet. Luar biasa!",
    },
];

// Salin fungsi dan state terkait dari Banner1.jsx
const Banner = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 900,
            once: true,
            mirror: false,
            offset: 50,
        });

        const handleScroll = () => {
            const homeSection = document.getElementById("home");
            if (homeSection) {
                const homeHeight = homeSection.offsetHeight;
                setScrolled(window.scrollY > homeHeight - 80);
            } else {
                setScrolled(window.scrollY > 80);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const handleLogin = () => {
        window.location.href = "/admin/login"; // Ganti sesuai route login filament Anda
    };

    const handleDaftar = () => {
        const contactSection = document.getElementById("kontak");
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className={styles.wrapper}>
            <Navbar
                styles={styles}
                navMenus={navMenus}
                scrollToSection={scrollToSection}
                handleLogin={handleLogin}
                handleDaftar={handleDaftar}
                scrolled={scrolled}
            />
            <HomeSection styles={styles} />
            <AboutSection />
            <ComparisonTableSection />
            <HowItWorksSection />
            <FeaturesSection features={features} />
            <MockupSection />
            <TestimonialsSection testimonials={testimonials} />
            <PaketSection />
            <ContactSection />
            <PrivacySection />
            <FloatingWAButton />
            <Footer styles={styles} />
        </div>
    );
};

export default Banner;
