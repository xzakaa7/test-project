import React from "react";

const Pricing = () => (
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
                Kami hadir untuk membantu pemerintah mendengar suara masyarakat
                dengan lebih cepat, transparan, dan terorganisir. Pilih paket
                sesuai kebutuhan wilayah Anda.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                <div
                    className="bg-white rounded-2xl border border-purple-100 p-8 flex flex-col shadow-sm hover:shadow-md transition"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <h3 className="text-xl font-bold text-purple-700 mb-2">
                        Paket Kecamatan
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Cocok untuk wilayah skala kecil yang ingin memulai
                        digitalisasi layanan aspirasi warga.
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
                        Didesain untuk kota/kabupaten yang ingin mengelola
                        aspirasi dalam skala lebih luas dan terintegrasi.
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
);

export default Pricing;
