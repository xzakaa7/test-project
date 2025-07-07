import React from "react";

const About = () => (
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
            <div className="flex justify-center mb-6 md:mb-0 md:hidden">
                <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                    <circle cx="45" cy="45" r="45" fill="#e9d5ff" />
                    <path
                        d="M45 25c-8 0-15 6.5-15 15v6c0 3-1 6-3 8l-1 1c-1 1 0 3 2 3h34c2 0 3-2 2-3l-1-1c-2-2-3-5-3-8v-6c0-8.5-7-15-15-15z"
                        fill="#a78bfa"
                    />
                    <circle cx="45" cy="65" r="5" fill="#a78bfa" />
                </svg>
            </div>
            <div className="space-y-6 text-base sm:text-lg leading-relaxed">
                <p className="mb-2" data-aos="fade-up" data-aos-delay="200">
                    <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold mb-2 animate-pulse">
                        Jembatan Aspirasi Digital
                    </span>
                    <br />
                    Aspira adalah aplikasi digital yang menjadi jembatan
                    komunikasi antara masyarakat dan pemerintah. Melalui
                    platform ini, warga dapat menyampaikan berbagai bentuk
                    aspirasi — mulai dari kritik, saran, hingga laporan kejadian
                    darurat — secara langsung, cepat, dan terdokumentasi dengan
                    baik.
                </p>
                <p data-aos="fade-up" data-aos-delay="300">
                    Dibangun dengan prinsip keterbukaan dan transparansi, Aspira
                    memberikan kemudahan bagi masyarakat dalam melaporkan isu
                    tanpa harus datang langsung ke kantor pelayanan. Pemerintah
                    atau instansi terkait pun dapat memantau, merespon, dan
                    menindaklanjuti laporan melalui dashboard interaktif dan
                    data statistik yang akurat.
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-2 animate-pulse">
                        Modern & Responsif
                    </span>
                    <br />
                    Dengan tampilan antarmuka ramah pengguna, responsif di
                    berbagai perangkat, serta fitur pelaporan cepat dan
                    pelacakan status laporan, Aspira hadir sebagai solusi modern
                    untuk pelayanan publik yang kolaboratif, transparan, dan
                    efisien.
                </p>
            </div>
        </div>
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
);

export default About;
