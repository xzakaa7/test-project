import React from "react";
import bannerImage from "./banner.png";

const styles = {
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
};

const Home = () => (
    <section id="home" className={styles.homeSection}>
        <div className={styles.bgCircle}></div>
        <div className={styles.bgCircle2}></div>
        <div className={styles.homeLeft} data-aos="fade-right">
            <h1 className={styles.homeTitle}>Aspira</h1>
            <div className={styles.homeTitleSub}>
                aplikasi suara dan pelaporan rakyat
            </div>
            <p className={styles.homeDesc}>
                Solusi digital untuk menyampaikan aspirasi, keluhan, dan saran
                Anda kepada pemerintah atau instansi terkait. Mudah, cepat, dan
                transparan. Jadikan suara Anda bermakna untuk perubahan yang
                lebih baik!
            </p>
            <button
                className={styles.homeButton}
                onClick={() => {
                    const contactSection = document.getElementById("kontak");
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
        <div className={styles.homeBannerBg} style={{ background: `#fcfcfd` }}>
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
);

export default Home;
