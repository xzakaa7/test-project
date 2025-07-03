import React from "react";

const ContactSection = () => (
    <section
                id="kontak"
                className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-20 px-2 sm:px-6"
            >
                <div className="max-w-5xl mx-auto text-center animate-fade-up duration-700">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-purple-700 tracking-tight">
                        Hubungi & Bergabung Bersama Aspira
                    </h2>
                    <p className="mb-10 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
                        Kami siap mendukung transformasi digital di wilayah
                        Anda. Hubungi kami atau langsung bergabung melalui
                        pilihan berikut.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
                        {/* Email */}
                        <a
                            href="mailto:aspiraindonesia1@gmail.com"
                            className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-4 group"
                        >
                            <Mail className="w-6 h-6 text-blue-500 group-hover:animate-pulse" />
                            <div className="text-left">
                                <div className="font-semibold text-gray-700 text-base sm:text-lg">
                                    Email
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600 break-all">
                                    aspiraindonesia1@gmail.com
                                </div>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/+6285184808349"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-4 group"
                        >
                            <Smartphone className="w-6 h-6 text-green-500 group-hover:animate-pulse" />
                            <div className="text-left">
                                <div className="font-semibold text-gray-700 text-base sm:text-lg">
                                    WhatsApp
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600">
                                    +62 851 8480 8349
                                </div>
                            </div>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com/aspiraku"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center gap-4 group"
                        >
                            <Instagram className="w-6 h-6 text-pink-500 group-hover:animate-pulse" />
                            <div className="text-left">
                                <div className="font-semibold text-gray-700 text-base sm:text-lg">
                                    Instagram
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600 break-all">
                                    @aspiraku
                                </div>
                            </div>
                        </a>
                    </div>

                    <a
                        href="https://wa.me/+6285184808349?text=Halo%20saya%20ingin%20bergabung%20dengan%20Aspira"
                        target="_blank"
                        className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-purple-700 hover:scale-105 transition-transform duration-300 shadow-md"
                    >
                        Gabung Sekarang
                    </a>
                </div>
            </section>
);

export default ContactSection;
