import React from "react";

const PrivacySection = () => (
  
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
);

export default PrivacySection;
