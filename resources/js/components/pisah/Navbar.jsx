import React from "react";

const Navbar = ({
    styles,
    navMenus,
    scrollToSection,
    handleLogin,
    handleDaftar,
    scrolled,
}) => (
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

export default Navbar;
