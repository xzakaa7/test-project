import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 relative">
        {/* Tombol Kembali */}
        <div className="absolute top-8 left-8">
            <Link
                to="/"
                className="flex items-center text-gray-600 hover:text-gray-900 font-medium text-sm transition"
            >
                <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                Kembali
            </Link>
        </div>
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 sm:p-12">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
                Kebijakan Privasi
            </h1>
            <p className="text-gray-600 text-base mb-8 text-center">
                Kami berkomitmen menjaga privasi dan keamanan data Anda. Halaman
                ini menjelaskan secara formal bagaimana kami mengelola informasi
                pribadi Anda.
            </p>
            <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                <section>
                    <h2 className="font-semibold text-gray-800 mb-1">
                        1. Informasi yang Dikumpulkan
                    </h2>
                    <ul className="list-disc ml-6">
                        <li>
                            Data identitas seperti nama, email, dan nomor
                            telepon.
                        </li>
                        <li>
                            Informasi yang Anda sampaikan melalui platform
                            Aspira.
                        </li>
                        <li>
                            Data penggunaan aplikasi, termasuk log aktivitas dan
                            perangkat.
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-800 mb-1">
                        2. Penggunaan Informasi
                    </h2>
                    <ul className="list-disc ml-6">
                        <li>
                            Memproses dan menindaklanjuti laporan atau aspirasi
                            yang Anda kirimkan.
                        </li>
                        <li>
                            Meningkatkan kualitas layanan dan pengalaman
                            pengguna.
                        </li>
                        <li>
                            Kami tidak membagikan data pribadi Anda kepada pihak
                            ketiga tanpa persetujuan, kecuali diwajibkan oleh
                            hukum.
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-800 mb-1">
                        3. Keamanan Data
                    </h2>
                    <p>
                        Kami menerapkan langkah-langkah keamanan teknis dan
                        organisasi yang wajar untuk melindungi data Anda dari
                        akses, penggunaan, atau pengungkapan yang tidak sah.
                    </p>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-800 mb-1">
                        4. Hak Pengguna
                    </h2>
                    <ul className="list-disc ml-6">
                        <li>
                            Anda berhak mengakses, memperbaiki, memperbarui,
                            atau menghapus data pribadi Anda kapan saja.
                        </li>
                        <li>
                            Permintaan terkait data pribadi dapat diajukan
                            melalui kontak yang tersedia.
                        </li>
                    </ul>
                </section>
                <section>
                    <h2 className="font-semibold text-gray-800 mb-1">
                        5. Kontak
                    </h2>
                    <p>
                        Untuk pertanyaan atau permintaan terkait privasi,
                        silakan hubungi kami melalui email:{" "}
                        <a
                            href="mailto:aspiraindonesia1@gmail.com"
                            className="text-blue-600 underline"
                        >
                            aspiraindonesia1@gmail.com
                        </a>
                        .
                    </p>
                </section>
            </div>
            <div className="mt-10 text-center">
                <span className="inline-block px-4 py-1 bg-gray-100 text-gray-500 rounded text-xs font-medium">
                    Terakhir diperbarui: Juni 2025
                </span>
            </div>
        </div>
    </div>
);

export default Privacy;
