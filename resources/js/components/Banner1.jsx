import React, { useEffect, useState } from "react";
import AOS from "aos";
import {
    Mail,
    Instagram,
    Smartphone,
    Settings,
    Globe,
    MessageCircle,
} from "lucide-react";
import "aos/dist/aos.css";
import bannerImage from "./banner.png";

// Tambahkan font Poppins dari Google Fonts di index.html atau gunakan Tailwind jika tersedia

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
            {/* Navbar */}
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
            {/* Banner Section */}
            <section id="home" className={styles.homeSection}>
                <div className={styles.bgCircle}></div>
                <div className={styles.bgCircle2}></div>
                <div className={styles.homeLeft} data-aos="fade-right">
                    <h1 className={styles.homeTitle}>Aspira</h1>
                    <div className={styles.homeTitleSub}>
                        aplikasi suara dan pelaporan rakyat
                    </div>
                    <p className={styles.homeDesc}>
                        Solusi digital untuk menyampaikan aspirasi, keluhan, dan
                        saran Anda kepada pemerintah atau instansi terkait.
                        Mudah, cepat, dan transparan. Jadikan suara Anda
                        bermakna untuk perubahan yang lebih baik!
                    </p>
                    <button
                        className={styles.homeButton}
                        onClick={() => {
                            const contactSection =
                                document.getElementById("kontak");
                            if (contactSection) {
                                contactSection.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }
                        }}
                    >
                        Hubungi Kami
                    </button>
                </div>
                {/* Banner image full kanan, tidak mengambang, hanya di desktop */}
                <div
                    className={styles.homeBannerBg}
                    style={{
                        background: `#fcfcfd`,
                    }}
                >
                    <img
                        src={bannerImage}
                        alt="Ilustrasi Portal Aspira"
                        className={styles.homeBannerImg}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "98% center",
                            display: "block",
                        }}
                    />
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="min-h-screen py-24 px-4 sm:px-6 bg-white text-gray-800"
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h2
                        className="text-4xl font-bold text-purple-700 mb-6"
                        data-aos="fade-down"
                    >
                        Tentang Aspira
                    </h2>
                    {/* Tambahkan ilustrasi/ikon di mobile */}
                    <div className="flex justify-center mb-6 md:mb-0 md:hidden">
                        <svg
                            width="90"
                            height="90"
                            viewBox="0 0 90 90"
                            fill="none"
                        >
                            <circle cx="45" cy="45" r="45" fill="#e9d5ff" />
                            <path
                                d="M45 25c-8 0-15 6.5-15 15v6c0 3-1 6-3 8l-1 1c-1 1 0 3 2 3h34c2 0 3-2 2-3l-1-1c-2-2-3-5-3-8v-6c0-8.5-7-15-15-15z"
                                fill="#a78bfa"
                            />
                            <circle cx="45" cy="65" r="5" fill="#a78bfa" />
                        </svg>
                    </div>
                    <div className="space-y-6 text-base sm:text-lg leading-relaxed">
                        <p
                            className="mb-2"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold mb-2 animate-pulse">
                                Jembatan Aspirasi Digital
                            </span>
                            <br />
                            Aspira adalah aplikasi digital yang menjadi jembatan
                            komunikasi antara masyarakat dan pemerintah. Melalui
                            platform ini, warga dapat menyampaikan berbagai
                            bentuk aspirasi — mulai dari kritik, saran, hingga
                            laporan kejadian darurat — secara langsung, cepat,
                            dan terdokumentasi dengan baik.
                        </p>
                        <p data-aos="fade-up" data-aos-delay="300">
                            Dibangun dengan prinsip keterbukaan dan
                            transparansi, Aspira memberikan kemudahan bagi
                            masyarakat dalam melaporkan isu tanpa harus datang
                            langsung ke kantor pelayanan. Pemerintah atau
                            instansi terkait pun dapat memantau, merespon, dan
                            menindaklanjuti laporan melalui dashboard interaktif
                            dan data statistik yang akurat.
                        </p>
                        <p data-aos="fade-up" data-aos-delay="400">
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-2 animate-pulse">
                                Modern & Responsif
                            </span>
                            <br />
                            Dengan tampilan antarmuka ramah pengguna, responsif
                            di berbagai perangkat, serta fitur pelaporan cepat
                            dan pelacakan status laporan, Aspira hadir sebagai
                            solusi modern untuk pelayanan publik yang
                            kolaboratif, transparan, dan efisien.
                        </p>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="max-w-6xl mx-auto text-center mt-16 sm:mt-20">
                    <h2
                        className="text-3xl sm:text-4xl font-bold text-purple-700 mb-8 sm:mb-10"
                        data-aos="fade-up"
                    >
                        Mengapa Pilih Aspira?
                    </h2>
                    <div
                        className="overflow-x-auto shadow-xl rounded-xl border border-gray-200 bg-white"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <table className="table-auto w-full text-xs sm:text-base border-collapse rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-purple-100 text-purple-800 font-semibold">
                                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left">
                                        Fitur
                                    </th>
                                    <th className="px-4 sm:px-6 py-3 sm:py-4">
                                        Aspira
                                    </th>
                                    <th className="px-4 sm:px-6 py-3 sm:py-4">
                                        Aplikasi Lain
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50 transition">
                                    <td className="border-t px-4 sm:px-6 py-3 sm:py-4 text-left">
                                        Pelaporan via WhatsApp
                                    </td>
                                    <td className="border-t px-4 sm:px-6 py-3 sm:py-4">
                                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                                            ✔ Tersedia
                                        </span>
                                    </td>
                                    <td className="border-t px-4 sm:px-6 py-3 sm:py-4">
                                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                                            ✖ Tidak Ada
                                        </span>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50 hover:bg-gray-100 transition">
                                    <td className="border-t px-4 sm:px-6 py-3 sm:py-4 text-left">
                                        Multi-instansi
                                    </td>
                                    <td className="border-t px-4 sm:px-6 py-3 sm:py-4">
                                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                                            ✔ Lengkap
                                        </span>
                                    </td>
                                    <td className="border-t px-4 sm:px-6 py-3 sm:py-4">
                                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">
                                            ⚠ Terbatas
                                        </span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition">
                                    <td className="border-t px-4 sm:px-6 py-3 sm:py-4 text-left">
                                        Tampilan modern
                                    </td>
                                    <td className="border-t px-4 sm:px-6 py-3 sm:py-4">
                                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                                            ✔ Stylish
                                        </span>
                                    </td>
                                    <td className="border-t px-4 sm:px-6 py-3 sm:py-4">
                                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                                            ✖ Kuno
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Cara Kerja Aspira */}
            <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-white py-24 px-4 overflow-hidden">
                {/* Decorative background shapes */}
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-100 rounded-full opacity-30 blur-2xl z-0"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-100 rounded-full opacity-20 blur-2xl z-0"></div>
                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <h2
                        className="text-4xl font-extrabold text-purple-700 mb-6 tracking-tight"
                        data-aos="fade-down"
                    >
                        Cara Kerja Aspira
                    </h2>
                    <p
                        className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto"
                        data-aos="fade-up"
                    >
                        Alur pelaporan yang{" "}
                        <span className="font-semibold text-purple-600">
                            mudah
                        </span>
                        ,{" "}
                        <span className="font-semibold text-blue-600">
                            cepat
                        </span>
                        , dan{" "}
                        <span className="font-semibold text-green-600">
                            transparan
                        </span>{" "}
                        untuk semua warga!
                    </p>
                    {/* Desktop: Horizontal Steps */}
                    <div className="hidden md:flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-12">
                        {/* Step 1: Warga Melapor */}
                        <div
                            className="flex-1 bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center group hover:scale-105 transition-all duration-500 border-t-4 border-blue-400"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="bg-blue-100 text-blue-600 rounded-full p-5 mb-4 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <svg
                                    className="w-12 h-12"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2.2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 20h9" />
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-blue-700 group-hover:text-blue-900 transition">
                                1. Warga Melapor
                            </h3>
                            <p className="text-gray-600 mb-2">
                                Warga mengirimkan aspirasi, keluhan, atau
                                laporan melalui aplikasi{" "}
                                <span className="font-semibold text-blue-600">
                                    Aspira
                                </span>{" "}
                                (web/mobile/WhatsApp).
                            </p>
                            <span className="inline-block mt-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-semibold animate-pulse">
                                Mudah & Praktis
                            </span>
                        </div>
                        {/* Arrow */}
                        <div className="hidden md:flex flex-col justify-center">
                            <svg
                                width="60"
                                height="60"
                                fill="none"
                                viewBox="0 0 60 60"
                                className="animate-bounce"
                            >
                                <path
                                    d="M10 30h40M40 20l10 10-10 10"
                                    stroke="#a78bfa"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        {/* Step 2: Admin Menerima */}
                        <div
                            className="flex-1 bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center group hover:scale-105 transition-all duration-500 border-t-4 border-purple-400"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="bg-purple-100 text-purple-600 rounded-full p-5 mb-4 shadow-lg group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                <svg
                                    className="w-12 h-12"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2.2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4 4h16v16H4z" />
                                    <path d="M8 2v4M16 2v4" />
                                    <path d="M2 10h20" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-purple-700 group-hover:text-purple-900 transition">
                                2. Admin Menerima
                            </h3>
                            <p className="text-gray-600 mb-2">
                                Admin menerima laporan di{" "}
                                <span className="font-semibold text-purple-600">
                                    dashboard adminpanel
                                </span>
                                , memverifikasi, lalu meneruskan ke petugas
                                terkait.
                            </p>
                            <span className="inline-block mt-2 px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full font-semibold animate-pulse">
                                Verifikasi Cepat
                            </span>
                        </div>
                        {/* Arrow */}
                        <div className="hidden md:flex flex-col justify-center">
                            <svg
                                width="60"
                                height="60"
                                fill="none"
                                viewBox="0 0 60 60"
                                className="animate-bounce"
                            >
                                <path
                                    d="M10 30h40M40 20l10 10-10 10"
                                    stroke="#a78bfa"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        {/* Step 3: Petugas Menangani */}
                        <div
                            className="flex-1 bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center group hover:scale-105 transition-all duration-500 border-t-4 border-green-400"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="bg-green-100 text-green-600 rounded-full p-5 mb-4 shadow-lg group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                <svg
                                    className="w-12 h-12"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2.2}
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 17v-2a4 4 0 0 1 8 0v2" />
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M19 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M5 21v-2a4 4 0 0 1 3-3.87" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-green-700 group-hover:text-green-900 transition">
                                3. Petugas Menangani
                            </h3>
                            <p className="text-gray-600 mb-2">
                                Petugas menerima tugas, menangani laporan di
                                lapangan, lalu mengubah status menjadi{" "}
                                <span className="font-semibold text-green-600">
                                    Ditangani
                                </span>{" "}
                                melalui Website.
                            </p>
                            <span className="inline-block mt-2 px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-semibold animate-pulse">
                                Tuntas & Transparan
                            </span>
                        </div>
                    </div>
                    {/* Mobile: Vertical Timeline */}
                    <div className="md:hidden flex flex-col gap-0 mt-12 relative max-w-xs mx-auto">
                        {/* Garis timeline */}
                        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-green-300 opacity-60 z-0"></div>
                        {/* Step 1 */}
                        <div className="flex items-start gap-4 relative z-10 mb-8">
                            {/* Dot */}
                            <div className="relative">
                                <span className="block w-5 h-5 bg-blue-500 border-4 border-white rounded-full shadow-lg"></span>
                            </div>
                            <div className="bg-white rounded-xl shadow p-4 flex-1">
                                <div className="font-bold text-blue-700 mb-1 flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-blue-400"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
                                    </svg>
                                    Warga Melapor
                                </div>
                                <div className="text-gray-600 text-sm">
                                    Melalui aplikasi/WhatsApp
                                </div>
                                <span className="inline-block mt-2 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full font-semibold animate-pulse">
                                    Mudah & Praktis
                                </span>
                            </div>
                        </div>
                        {/* Step 2 */}
                        <div className="flex items-start gap-4 relative z-10 mb-8">
                            <div className="relative">
                                <span className="block w-5 h-5 bg-purple-500 border-4 border-white rounded-full shadow-lg"></span>
                            </div>
                            <div className="bg-white rounded-xl shadow p-4 flex-1">
                                <div className="font-bold text-purple-700 mb-1 flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-purple-400"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4 4h16v16H4z" />
                                        <path d="M8 2v4M16 2v4" />
                                        <path d="M2 10h20" />
                                    </svg>
                                    Admin Menerima
                                </div>
                                <div className="text-gray-600 text-sm">
                                    Verifikasi & disposisi ke petugas
                                </div>
                                <span className="inline-block mt-2 px-2 py-0.5 bg-purple-50 text-purple-700 text-xs rounded-full font-semibold animate-pulse">
                                    Verifikasi Cepat
                                </span>
                            </div>
                        </div>
                        {/* Step 3 */}
                        <div className="flex items-start gap-4 relative z-10">
                            <div className="relative">
                                <span className="block w-5 h-5 bg-green-500 border-4 border-white rounded-full shadow-lg"></span>
                            </div>
                            <div className="bg-white rounded-xl shadow p-4 flex-1">
                                <div className="font-bold text-green-700 mb-1 flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-green-400"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M9 17v-2a4 4 0 0 1 8 0v2" />
                                        <circle cx="12" cy="7" r="4" />
                                        <path d="M19 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M5 21v-2a4 4 0 0 1 3-3.87" />
                                    </svg>
                                    Petugas Menangani
                                </div>
                                <div className="text-gray-600 text-sm">
                                    Status laporan diubah menjadi{" "}
                                    <span className="font-semibold text-green-600">
                                        Ditangani
                                    </span>
                                </div>
                                <span className="inline-block mt-2 px-2 py-0.5 bg-green-50 text-green-700 text-xs rounded-full font-semibold animate-pulse">
                                    Tuntas & Transparan
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="fitur"
                className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 px-6 py-20`}
            >
                <h2
                    className="text-4xl font-bold text-purple-700 mb-6 text-center"
                    data-aos="fade-down"
                >
                    Fitur & Keunggulan
                </h2>
                <div className="mt-12 grid max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            className="group flex flex-col items-center justify-center bg-white rounded-3xl p-8 h-64 shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="bg-purple-100 group-hover:bg-purple-600 text-purple-600 group-hover:text-white transition-all duration-300 p-4 rounded-full mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-center text-gray-800 group-hover:text-purple-800 transition-all duration-300">
                                {feature.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mockup Showcase Section */}
            <section
                id="mockup"
                className="w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 py-24 px-4 md:px-12 flex flex-col items-center"
            >
                <h2
                    className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6 text-center tracking-tight"
                    data-aos="fade-down"
                >
                    Mockup Aplikasi Aspira
                </h2>
                <p
                    className="text-lg text-gray-700 mb-14 text-center max-w-2xl"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Tampilan modern, mudah digunakan, dan responsif.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl px-4">
                    {/* Mockup 1 */}
                    <div
                        className="w-full flex justify-center"
                        data-aos="zoom-in-right"
                        data-aos-delay="200"
                    >
                        <div className="relative group hover:scale-105 transition-transform duration-500">
                            <img
                                src="/mockup1.png"
                                alt="Mockup Aspira Login"
                                className="rounded-[2rem] shadow-2xl transition-all duration-700 ease-in-out"
                                style={{
                                    width: "100%",
                                    maxWidth: "420px",
                                    animation: "float1 4s ease-in-out infinite",
                                }}
                            />
                        </div>
                    </div>

                    {/* Mockup 2 */}
                    <div
                        className="w-full flex justify-center"
                        data-aos="zoom-in-left"
                        data-aos-delay="400"
                    >
                        <div className="relative group hover:scale-105 transition-transform duration-500">
                            <img
                                src="/mockup2.png"
                                alt="Mockup Aspira Dashboard"
                                className="rounded-[2rem] shadow-2xl transition-all duration-700 ease-in-out"
                                style={{
                                    width: "100%",
                                    maxWidth: "480px",
                                    animation:
                                        "float2 4.2s ease-in-out infinite",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Animasi ringan untuk mockup */}
                <style>{`
    @keyframes float1 {
        0% {
            transform: translateY(0px) scale(1) rotate(-1deg);
        }
        50% {
            transform: translateY(-12px) scale(1.03) rotate(1.2deg);
        }
        100% {
            transform: translateY(0px) scale(1) rotate(-1deg);
        }
    }

    @keyframes float2 {
        0% {
            transform: translateY(0px) scale(1) rotate(1deg);
        }
        50% {
            transform: translateY(10px) scale(1.025) rotate(-1.2deg);
        }
        100% {
            transform: translateY(0px) scale(1) rotate(1deg);
        }
    }
`}</style>
            </section>

            {/* Testimonials Section */}
            <section className="bg-white text-gray-800 py-20 sm:py-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                    <h2
                        className="text-3xl sm:text-4xl font-extrabold mb-12 text-purple-700"
                        data-aos="fade-down"
                    >
                        Apa Kata Mereka
                    </h2>

                    {/* Mobile Carousel */}
                    <div className="block md:hidden">
                        <div
                            className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 px-1 hide-scrollbar"
                            style={{ WebkitOverflowScrolling: "touch" }}
                        >
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                    className="min-w-[90vw] max-w-[90vw] bg-gradient-to-br from-purple-100 via-white to-purple-50 p-6 rounded-3xl shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 snap-center flex-shrink-0 relative"
                                >
                                    {/* Avatar */}
                                    <div className="flex justify-center mb-4 mt-2">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 via-blue-300 to-purple-200 flex items-center justify-center shadow-md border-4 border-white mx-auto overflow-hidden">
                                            <span className="text-2xl font-bold text-white">
                                                {item.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Comment */}
                                    <p className="text-base italic text-gray-700 mb-6 leading-relaxed break-words">
                                        “{item.comment}”
                                    </p>
                                    <div className="text-sm font-semibold text-purple-700">
                                        {item.name}
                                    </div>
                                    <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mt-4"></div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex justify-center gap-2 mt-5">
                            {testimonials.map((_, idx) => (
                                <span
                                    key={idx}
                                    className="w-3 h-3 rounded-full bg-purple-300 hover:bg-purple-500 transition-all duration-300"
                                ></span>
                            ))}
                        </div>

                        {/* Hide scrollbar */}
                        <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
                    </div>

                    {/* Desktop Grid */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mt-6">
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                className="bg-gradient-to-br from-purple-100 via-white to-purple-50 p-8 rounded-3xl shadow-md border border-purple-200 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex flex-col justify-between h-full">
                                    <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                                        “{item.comment}”
                                    </p>
                                    <div className="text-sm font-semibold text-purple-700">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                id="paket"
                className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-4 sm:px-6 text-gray-800"
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h2
                        className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-6"
                        data-aos="fade-down"
                    >
                        Solusi Digital untuk Aspirasi Warga
                    </h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
                        Kami hadir untuk membantu pemerintah mendengar suara
                        masyarakat dengan lebih cepat, transparan, dan
                        terorganisir. Pilih paket sesuai kebutuhan wilayah Anda.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                        {/* Paket Kecamatan */}
                        <div
                            className="bg-white rounded-2xl border border-purple-100 p-8 flex flex-col shadow-sm hover:shadow-md transition"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="text-xl font-bold text-purple-700 mb-2">
                                Paket Kecamatan
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Cocok untuk wilayah skala kecil yang ingin
                                memulai digitalisasi layanan aspirasi warga.
                            </p>
                            <div className="mb-6 text-sm text-gray-700 space-y-2">
                                <p>🛠️ Panel Admin & Petugas</p>
                                <p>📊 Statistik Laporan & Warga</p>
                                <p>💬 Terhubung ke WhatsApp</p>
                            </div>
                            <div className="mt-auto">
                                <a
                                    href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20menggunakan%20Paket%20Kecamatan%20Aspira"
                                    target="_blank"
                                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition"
                                >
                                    Hubungi Kami
                                </a>
                            </div>
                        </div>

                        {/* Paket Kabupaten */}
                        <div
                            className="bg-white rounded-2xl border border-purple-100 p-8 flex flex-col shadow-sm hover:shadow-md transition relative"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="absolute top-4 right-4 bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded-full">
                                Skala Lebih Luas
                            </div>
                            <h3 className="text-xl font-bold text-purple-700 mb-2">
                                Paket Kabupaten
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Didesain untuk kota/kabupaten yang ingin
                                mengelola aspirasi dalam skala lebih luas dan
                                terintegrasi.
                            </p>
                            <div className="mb-6 text-sm text-gray-700 space-y-2">
                                <p>🛠️ Panel Admin & Multi-Petugas</p>
                                <p>📊 Statistik Laporan & Pengguna Aktif</p>
                                <p>💬 Terhubung ke WhatsApp Instansi</p>
                            </div>
                            <div className="mt-auto">
                                <a
                                    href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20Paket%20Kabupaten%20Aspira"
                                    target="_blank"
                                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition"
                                >
                                    Konsultasi Sekarang
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kontak Section */}
            <section
                id="kontak"
                className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-20 px-2 sm:px-6"
            >
                <div className="max-w-5xl mx-auto text-center animate-fade-up duration-700">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-purple-700 tracking-tight">
                        Hubungi & Bergabung Bersama Aspira
                    </h2>
                    <p className="mb-10 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                        Kami siap mendukung transformasi digital di wilayah
                        Anda. Hubungi kami atau langsung bergabung melalui
                        pilihan berikut.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
                        {/* Email */}
                        <a
                            href="mailto:aspiraindonesia1@gmail.com"
                            className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-4 group"
                        >
                            <Mail className="w-6 h-6 text-blue-500 group-hover:animate-pulse" />
                            <div className="text-left">
                                <div className="font-semibold text-gray-700 text-base sm:text-lg">
                                    Email
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600 break-all">
                                    aspiraindonesia1@gmail.com
                                </div>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/+6285184808349"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-4 group"
                        >
                            <Smartphone className="w-6 h-6 text-green-500 group-hover:animate-pulse" />
                            <div className="text-left">
                                <div className="font-semibold text-gray-700 text-base sm:text-lg">
                                    WhatsApp
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600">
                                    +62 851 8480 8349
                                </div>
                            </div>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com/aspiraku"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-4 group"
                        >
                            <Instagram className="w-6 h-6 text-pink-500 group-hover:animate-pulse" />
                            <div className="text-left">
                                <div className="font-semibold text-gray-700 text-base sm:text-lg">
                                    Instagram
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600 break-all">
                                    @aspiraku
                                </div>
                            </div>
                        </a>
                    </div>

                    <a
                        href="https://wa.me/+6285184808349?text=Halo%20saya%20ingin%20bergabung%20dengan%20Aspira"
                        target="_blank"
                        className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-purple-700 hover:scale-105 transition-transform duration-300 shadow-md"
                    >
                        Gabung Sekarang
                    </a>
                </div>
            </section>

           
{/* Kebijakan Privasi Section */}
<section
    id="privacy"
    className="relative py-24 px-6 sm:px-10 bg-gradient-to-br from-white via-purple-50 to-blue-50 border-t border-gray-200 flex flex-col items-center justify-center"
>
    <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-full shadow-md mb-6">
            <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="4" fill="#fff" />
                <path
                    d="M8 10v4M12 8v6M16 12v2"
                    stroke="#7c3aed"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </div>

        {/* Heading */}
        <h2
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
            data-aos="fade-down"
        >
            Kebijakan Privasi & Perlindungan Data
        </h2>

        {/* Description */}
        <p
            className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8"
            data-aos="fade-up"
        >
            Dokumen ini menjelaskan bagaimana kami mengelola, melindungi, dan menggunakan informasi pribadi Anda sesuai dengan prinsip perlindungan data yang berlaku. Transparansi dan keamanan adalah komitmen utama kami.
        </p>

        {/* CTA Button */}
        <a
            href="/privacy"
            className="inline-flex items-center gap-3 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white font-medium rounded-full shadow transition-all duration-300 text-base sm:text-lg"
            data-aos="zoom-in"
        >
            <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    d="M12 4v16m8-8H4"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
            Baca Kebijakan Lengkap
        </a>

        {/* Last Update */}
        <span className="mt-5 text-xs text-gray-500">
            Diperbarui terakhir: Juni 2025
        </span>
    </div>
</section>



            {/* Floating CS WhatsApp Button */}

            <a
                href="https://wa.me/+6285184808349?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20Aspira"
                target="_blank"
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition"
                title="Chat via WhatsApp"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12.04 2C6.58 2 2 6.58 2 12.04c0 1.91.5 3.71 1.45 5.31L2 22l4.78-1.42c1.55.83 3.31 1.26 5.21 1.26 5.46 0 10.04-4.58 10.04-10.04C22.02 6.58 17.5 2 12.04 2zm0 18.17c-1.65 0-3.25-.44-4.64-1.28l-.33-.2-2.83.84.86-2.76-.21-.34c-.88-1.4-1.34-3.03-1.34-4.7 0-4.68 3.81-8.49 8.49-8.49s8.49 3.81 8.49 8.49-3.81 8.49-8.49 8.49zm4.62-6.31c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.95-1.22-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.01-.38.11-.5.11-.11.24-.28.36-.41.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.77-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01s-.42.06-.64.3c-.22.24-.84.83-.84 2.02s.86 2.34.98 2.5c.12.16 1.7 2.6 4.12 3.65.58.25 1.03.39 1.38.5.58.19 1.1.16 1.51.1.46-.07 1.44-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
                </svg>
            </a>

            {/* Footer */}
            <footer className={styles.footer}>
                <div>©2025 Aspira. All rights reserved.</div>
                <div>Developed with ❤️ by Aspira Team</div>
            </footer>
        </div>
    );
};

export default Banner;
