import React from "react";
import bannerImage from "./banner.png";

const HomeSection = ({ styles }) => (
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
);

export default HomeSection;
