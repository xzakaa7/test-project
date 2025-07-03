import React from "react";

const ComparisonTableSection = () => (
    <div className="max-w-6xl mx-auto text-center mt-16 sm:mt-20">
        {/* ...isi table perbandingan persis seperti di Banner.jsx... */}  <div className="max-w-6xl mx-auto text-center mt-16 sm:mt-20">
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
    </div>
);

export default ComparisonTableSection;
