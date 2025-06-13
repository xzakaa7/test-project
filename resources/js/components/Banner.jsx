import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bannerImage from './banner.png';
import { useInView } from './useInView';
import { Settings, Globe, Smartphone, MessageCircle } from 'lucide-react';


// CSS-in-JS style
const styles = {
  wrapper: `w-full scroll-smooth`,
  
  navbar: (scrolled) => `
    fixed top-0 left-0 w-full z-50 transition duration-300
    ${scrolled ? 'bg-white text-gray-900 shadow' : 'bg-transparent text-white'}
  `,
  
  navContent: `max-w-7xl mx-auto flex justify-between items-center px-6 py-4`,
  
  logo: `text-2xl font-bold`,
  
  navLinks: `flex space-x-6 font-semibold`,
  
  navLink: `hover:text-purple-500 transition bg-transparent border-none cursor-pointer font-semibold`,
  
  banner: `min-h-screen flex items-stretch bg-gradient-to-r from-blue-800 to-blue-500 text-white pt-20`,
  
  bannerContent: `max-w-7xl mx-auto flex flex-col md:flex-row items-stretch px-6 w-full`,
  
  bannerText: `md:w-1/2 flex flex-col justify-center px-8`,
  
  bannerTitle: `text-7xl md:text-8xl font-extrabold mb-6 text-white animate-fadeInUp transition-all duration-1000 ease-out hover:scale-105`,
  
  featureCard: `flex flex-col items-center bg-[#140f48] text-white p-6 rounded-xl hover:bg-purple-600 transition duration-300 cursor-pointer`,
  
  testimonialCard: `bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-300`,

  footer: `text-center text-sm py-6 bg-gray-900 text-gray-400`,
};


const Banner = () => {
  const [scrolled, setScrolled] = useState(false);
  const [featureRef, featureInView] = useInView();
  const [aboutRef, aboutInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  // Add smooth scroll handler
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 50,
    });
  }, []);
  
const features = [
  { icon: <Settings size={36} />, title: 'Lapor Cepat' },
  { icon: <Globe size={36} />, title: 'Responsif' },
  { icon: <Smartphone size={36} />, title: 'User Friendly' },
  { icon: <MessageCircle size={36} />, title: 'Saling Terhubung' },
];



  const testimonials = [
    {
      name: 'Budi Santoso',
      comment: 'Aplikasinya mudah digunakan dan sangat membantu menyampaikan aspirasi.',
    },
    {
      name: 'Siti Aminah',
      comment: 'Sekarang bisa lapor masalah jalan rusak tanpa ribet. Luar biasa!',
    },
  ];

  return (
    <div className={styles.wrapper}>
      {/* Navbar */}
      <nav className={styles.navbar(scrolled)}>
        <div className={styles.navContent}>
          <div className={styles.logo}>🔔 Aspira</div>
          <ul className={styles.navLinks}>
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className={styles.navLink}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className={styles.navLink}
              >
                Tentang
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('fitur')}
                className={styles.navLink}
              >
                Fitur
              </button>
            </li>
            <li>
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                className={styles.navLink}
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="/admin/login" 
                className={styles.navLink}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Banner Section */}
      <section id="home" className={styles.banner}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerText} data-aos="fade-right" data-aos-duration="1000">
            <h1 className={styles.bannerTitle}>ASPIRA</h1>
            <p className="text-lg leading-relaxed text-white" data-aos="fade-up" data-aos-delay="200">
              Aspira adalah aplikasi digital yang memudahkan masyarakat untuk menyampaikan aspirasi
              dan melaporkan permasalahan secara langsung kepada pihak terkait.
            </p>
          </div>

          <div className="absolute top-0 right-0 w-1/2 h-full z-0">
            <img src={bannerImage} alt="Ilustrasi Aspira" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-24 px-6 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-purple-700 mb-6" data-aos="fade-down">
      Tentang Aspira
    </h2>
    <p className="text-lg leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="200">
      Aspira adalah aplikasi digital yang menjadi jembatan komunikasi antara masyarakat dan pemerintah.
      Melalui platform ini, warga dapat menyampaikan berbagai bentuk aspirasi — mulai dari kritik, saran, hingga laporan kejadian darurat — secara langsung, cepat, dan terdokumentasi dengan baik.
    </p>
    <p className="text-lg leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="300">
      Dibangun dengan prinsip keterbukaan dan transparansi, Aspira memberikan kemudahan bagi masyarakat dalam melaporkan isu tanpa harus datang langsung ke kantor pelayanan.
      Pemerintah atau instansi terkait pun dapat memantau, merespon, dan menindaklanjuti laporan melalui dashboard interaktif dan data statistik yang akurat.
    </p>
    <p className="text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400">
      Dengan dukungan tampilan antarmuka yang ramah pengguna, responsif di berbagai perangkat, serta fitur pelaporan cepat dan sistem pelacakan status laporan, Aspira hadir sebagai solusi modern untuk pelayanan publik yang kolaboratif, transparan, dan efisien.
    </p>
  </div>

  {/* Comparison Table */}
  <div className="max-w-6xl mx-auto text-center mt-20">
    <h2 className="text-4xl font-bold text-purple-700 mb-10" data-aos="fade-up">
      Mengapa Pilih Aspira?
    </h2>
    <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200 bg-white" data-aos="fade-up" data-aos-delay="200">
      <table className="table-auto w-full text-sm md:text-base border-collapse rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-purple-100 text-purple-800 font-semibold">
            <th className="px-6 py-4 text-left">Fitur</th>
            <th className="px-6 py-4">Aspira</th>
            <th className="px-6 py-4">Aplikasi Lain</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50 transition">
            <td className="border-t px-6 py-4 text-left">Pelaporan via WhatsApp</td>
            <td className="border-t px-6 py-4">
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                ✔ Tersedia
              </span>
            </td>
            <td className="border-t px-6 py-4">
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                ✖ Tidak Ada
              </span>
            </td>
          </tr>
          <tr className="bg-gray-50 hover:bg-gray-100 transition">
            <td className="border-t px-6 py-4 text-left">Multi-instansi</td>
            <td className="border-t px-6 py-4">
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                ✔ Lengkap
              </span>
            </td>
            <td className="border-t px-6 py-4">
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">
                ⚠ Terbatas
              </span>
            </td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="border-t px-6 py-4 text-left">Tampilan modern</td>
            <td className="border-t px-6 py-4">
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                ✔ Stylish
              </span>
            </td>
            <td className="border-t px-6 py-4">
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

      {/* Features Section */}
<section
  id="fitur"
  ref={featureRef}
  className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 px-6 py-20`}
>
  <h2 className="text-4xl font-bold text-purple-700 mb-6 text-center" data-aos="fade-down">
    Fitur & Keunggulan
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
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

{/* Testimonials Section */}
<section className="bg-white text-gray-800 py-28">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-14 text-purple-700" data-aos="fade-down">
      Apa Kata Mereka
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {testimonials.map((item, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 200}
          className="bg-gradient-to-br from-purple-100 via-white to-purple-50 p-8 rounded-2xl shadow-md border border-purple-200 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex flex-col h-full justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-purple-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h.01M15 12h.01M12 16.01h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9a9 9 0 0118 0z" />
            </svg>
            <p className="text-base italic text-gray-700 mb-6 leading-relaxed">
              "{item.comment}"
            </p>
            <div className="text-sm font-semibold text-purple-700">{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Packages Section */}
<section className="bg-gradient-to-br from-purple-50 to-blue-50 py-28 px-6 text-gray-800 overflow-hidden">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-purple-700 mb-6" data-aos="fade-down">
      Pilih Paket Aspira
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div 
        className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transform hover:-translate-y-1 hover:shadow-2xl transition duration-300"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h3 className="text-2xl font-bold text-purple-700 mb-3">Paket Kecamatan</h3>
        <p className="mb-4 text-gray-600 text-center">Cocok untuk wilayah skala kecamatan dengan fitur pelaporan dasar dan pengelolaan aspirasi warga.</p>
        <ul className="text-left mb-6 text-sm text-gray-700 space-y-2">
          <li>✅ Pelaporan Warga</li>
          <li>✅ Dashboard Petugas</li>
          <li>✅ Statistik Laporan</li>
        </ul>
        <a
          href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20menggunakan%20Paket%20Kecamatan%20Aspira"
          target="_blank"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Pilih Paket
        </a>
      </div>
      <div 
        className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transform hover:-translate-y-1 hover:shadow-2xl transition duration-300"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <h3 className="text-2xl font-bold text-purple-700 mb-3">Paket Kabupaten</h3>
        <p className="mb-4 text-gray-600 text-center">Solusi lengkap untuk skala besar dengan dukungan multi-instansi dan fitur lanjutan.</p>
        <ul className="text-left mb-6 text-sm text-gray-700 space-y-2">
          <li>✅ Semua Fitur Paket Kecamatan</li>
          <li>✅ Multi-Role (Admin, Petugas, Operator)</li>
          <li>✅ Integrasi dengan WhatsApp</li>
        </ul>
        <a
          href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20Paket%20Kabupaten%20Aspira"
          target="_blank"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Pilih Paket
        </a>
      </div>
    </div>
  </div>
</section>

{/* Ayo Gabung Section */}
<section className="relative bg-gradient-to-r from-blue-900 to-purple-800 text-white py-24 px-6 text-center overflow-hidden">
  {/* Background mockup jika kamu kasih nanti */}
  <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-cover bg-center" style={{ backgroundImage: `url('/mockup-android.png')` }}></div>
  <div className="relative z-10 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-4">Ayo Bergabung Bersama Aspira</h2>
    <p className="mb-8 text-lg">Bangun pelayanan publik yang modern, responsif, dan terbuka. Cukup satu langkah kecil untuk perubahan besar.</p>
    <a
      href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20bergabung%20dengan%20Aspira"
      target="_blank"
      className="bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition"
    >
      Gabung Sekarang
    </a>
  </div>
</section>

{/* Floating CS WhatsApp Button */}

<a
  href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20Aspira"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition"
  title="Chat via WhatsApp"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.04 2C6.58 2 2 6.58 2 12.04c0 1.91.5 3.71 1.45 5.31L2 22l4.78-1.42c1.55.83 3.31 1.26 5.21 1.26 5.46 0 10.04-4.58 10.04-10.04C22.02 6.58 17.5 2 12.04 2zm0 18.17c-1.65 0-3.25-.44-4.64-1.28l-.33-.2-2.83.84.86-2.76-.21-.34c-.88-1.4-1.34-3.03-1.34-4.7 0-4.68 3.81-8.49 8.49-8.49s8.49 3.81 8.49 8.49-3.81 8.49-8.49 8.49zm4.62-6.31c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.95-1.22-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.01-.38.11-.5.11-.11.24-.28.36-.41.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.77-.2-.48-.4-.41-.54-.42-.14-.01-.3-.01-.46-.01s-.42.06-.64.3c-.22.24-.84.83-.84 2.02s.86 2.34.98 2.5c.12.16 1.7 2.6 4.12 3.65.58.25 1.03.39 1.38.5.58.19 1.1.16 1.51.1.46-.07 1.44-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/>
  </svg>
</a>

      {/* Footer */}
      <footer className={styles.footer}>
        <div>© 2025 Aspira. All rights reserved.</div>
        <div>Developed with ❤️ by Tim Aspira</div>
      </footer>
    </div>
  );
};

export default Banner;