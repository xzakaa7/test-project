import React from "react";
import { Mail, Instagram, Smartphone } from "lucide-react";

const Contact = () => (
    <section
        id="kontak"
        className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-20 px-2 sm:px-6 relative overflow-hidden animate-contact-fade-in"
    >
        {/* Decorative animated blobs */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-200 rounded-full opacity-30 blur-2xl animate-blob1 z-0"></div>
        <div className="absolute bottom-0 -right-24 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-2xl animate-blob2 z-0"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-purple-700 tracking-tight animate-slide-down">
                Hubungi & Bergabung Bersama Aspira
            </h2>
            <p className="mb-10 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg animate-fade-in">
                Kami siap mendukung transformasi digital di wilayah Anda.
                Hubungi kami atau langsung bergabung melalui pilihan berikut.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
                <a
                    href="mailto:aspiraindonesia1@gmail.com"
                    className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transform hover:scale-[1.04] transition-all duration-300 flex items-center gap-4 group animate-pop"
                    style={{ animationDelay: "0.1s" }}
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
                <a
                    href="https://wa.me/+6285184808349"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transform hover:scale-[1.04] transition-all duration-300 flex items-center gap-4 group animate-pop"
                    style={{ animationDelay: "0.2s" }}
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
                <a
                    href="https://instagram.com/aspiraku"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transform hover:scale-[1.04] transition-all duration-300 flex items-center gap-4 group animate-pop"
                    style={{ animationDelay: "0.3s" }}
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
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-purple-700 hover:scale-105 transition-transform duration-300 shadow-md animate-bounce-in"
                style={{ animationDelay: "0.5s" }}
            >
                Gabung Sekarang
            </a>
        </div>
        <style>{`
            @keyframes contactFadeIn {
                from { opacity: 0; filter: blur(12px);}
                to { opacity: 1; filter: blur(0);}
            }
            .animate-contact-fade-in {
                animation: contactFadeIn 1.1s cubic-bezier(.4,0,.2,1) both;
            }
            @keyframes blob1 {
                0%,100% { transform: scale(1) translateY(0);}
                50% { transform: scale(1.1) translateY(20px);}
            }
            @keyframes blob2 {
                0%,100% { transform: scale(1) translateY(0);}
                50% { transform: scale(1.08) translateY(-18px);}
            }
            .animate-blob1 {
                animation: blob1 6s ease-in-out infinite;
            }
            .animate-blob2 {
                animation: blob2 7s ease-in-out infinite;
            }
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px);}
                to { opacity: 1; transform: translateY(0);}
            }
            .animate-fade-in-up {
                animation: fadeInUp 1s cubic-bezier(.4,0,.2,1) both;
            }
            @keyframes slideDown {
                from { opacity: 0; transform: translateY(-24px);}
                to { opacity: 1; transform: translateY(0);}
            }
            .animate-slide-down {
                animation: slideDown 0.8s cubic-bezier(.4,0,.2,1) both;
            }
            @keyframes fadeIn {
                from { opacity: 0;}
                to { opacity: 1;}
            }
            .animate-fade-in {
                animation: fadeIn 1.2s ease-in both;
            }
            @keyframes pop {
                0% { opacity: 0; transform: scale(0.8);}
                80% { opacity: 1; transform: scale(1.05);}
                100% { opacity: 1; transform: scale(1);}
            }
            .animate-pop {
                animation: pop 0.7s cubic-bezier(.4,0,.2,1) both;
            }
            @keyframes bounceIn {
                0% { opacity: 0; transform: scale(0.7);}
                60% { opacity: 1; transform: scale(1.1);}
                100% { opacity: 1; transform: scale(1);}
            }
            .animate-bounce-in {
                animation: bounceIn 0.9s cubic-bezier(.4,0,.2,1) both;
            }
        `}</style>
    </section>
);

export default Contact;
