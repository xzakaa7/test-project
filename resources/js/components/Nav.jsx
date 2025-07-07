import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const styles = {
    navbar: `
        fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-300
        flex justify-between items-center
    `,
    navbarTransparent: `bg-transparent shadow-none backdrop-blur-0`,
    navbarSolid: `bg-white/90 shadow-md backdrop-blur-sm`,
    logo: `flex items-center gap-2 text-2xl font-bold tracking-tight text-[#6c47ff] font-poppins`,
    navLinks: `hidden md:flex items-center gap-8`,
    navLink: `
        text-[#22223b] font-semibold text-base tracking-wide hover:text-[#6c47ff] transition
        relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-[#6c47ff] after:transition-all after:duration-300 hover:after:w-full after:mt-1 font-poppins
    `,
    navActions: `flex items-center gap-3`,
    signInBtn: `
        bg-[#6c47ff] hover:bg-[#4b2fd6] text-white px-5 py-2 rounded-lg font-semibold shadow transition font-poppins
    `,
    joinBtn: `
        bg-white border border-[#6c47ff] text-[#6c47ff] px-5 py-2 rounded-lg font-semibold shadow transition font-poppins hover:bg-[#f3f4f6]
    `,
};

const navMenus = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Pricing", id: "paket" },
    { label: "Contact", id: "kontak" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 900, once: true, mirror: false, offset: 50 });
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
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleLogin = () => {
        window.location.href = "/admin/login";
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
        <nav
            className={
                styles.navbar +
                " animate__animated animate__fadeInDown " +
                (scrolled ? styles.navbarSolid : styles.navbarTransparent)
            }
        >
            <div className={styles.logo}>
                {/* Bell Icon */}
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <circle cx="19" cy="19" r="19" fill="#6c47ff" />
                    <path
                        d="M19 10c-3 0-5 2.5-5 5.5v2.2c0 1.1-.4 2.1-1.1 2.9l-.5.5c-.5.5-.2 1.4.5 1.4h14.2c.7 0 1-1 .5-1.4l-.5-.5c-.7-.8-1.1-1.8-1.1-2.9v-2.2c0-3-2-5.5-5-5.5z"
                        fill="#fff"
                    />
                    <circle cx="19" cy="27" r="2" fill="#fff" />
                </svg>
                <span className="font-bold text-xl text-[#6c47ff] font-poppins">
                    Aspira
                </span>
            </div>
            <ul className={styles.navLinks}>
                {navMenus.map((menu, idx) => (
                    <li key={idx}>
                        <button
                            className={styles.navLink}
                            onClick={() => scrollToSection(menu.id)}
                        >
                            {menu.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className={styles.navActions}>
                <button className={styles.signInBtn} onClick={handleLogin}>
                    Masuk
                </button>
                <button className={styles.joinBtn} onClick={handleDaftar}>
                    Daftar
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
