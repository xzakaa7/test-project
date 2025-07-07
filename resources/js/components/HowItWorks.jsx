import React from "react";

const HowItWorks = () => (
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
                <span className="font-semibold text-purple-600">mudah</span>,{" "}
                <span className="font-semibold text-blue-600">cepat</span>, dan{" "}
                <span className="font-semibold text-green-600">transparan</span>{" "}
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
                        Warga mengirimkan aspirasi, keluhan, atau laporan
                        melalui aplikasi{" "}
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
                        , memverifikasi, lalu meneruskan ke petugas terkait.
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
                        Petugas menerima tugas, menangani laporan di lapangan,
                        lalu mengubah status menjadi{" "}
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
);

export default HowItWorks;
