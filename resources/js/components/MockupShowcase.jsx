import React from "react";

const MockupShowcase = () => (
    <section
        id="mockup"
        className="w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 py-24 px-4 md:px-12 flex flex-col items-center"
    >
        <h2
            className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6 text-center tracking-tight"
            data-aos="fade-down"
        >
            Mockup Aplikasi Aspira
        </h2>
        <p
            className="text-lg text-gray-700 mb-14 text-center max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="100"
        >
            Tampilan modern, mudah digunakan, dan responsif.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl px-4">
            <div
                className="w-full flex justify-center"
                data-aos="zoom-in-right"
                data-aos-delay="200"
            >
                <div className="relative group hover:scale-105 transition-transform duration-500">
                    <img
                        src="/mockup1.png"
                        alt="Mockup Aspira Login"
                        className="rounded-[2rem] shadow-2xl transition-all duration-700 ease-in-out animate-float1"
                        style={{
                            width: "100%",
                            maxWidth: "420px",
                        }}
                    />
                </div>
            </div>
            <div
                className="w-full flex justify-center"
                data-aos="zoom-in-left"
                data-aos-delay="400"
            >
                <div className="relative group hover:scale-105 transition-transform duration-500">
                    <img
                        src="/mockup2.png"
                        alt="Mockup Aspira Dashboard"
                        className="rounded-[2rem] shadow-2xl transition-all duration-700 ease-in-out animate-float2"
                        style={{
                            width: "100%",
                            maxWidth: "480px",
                        }}
                    />
                </div>
            </div>
        </div>
        <style>{`
            @keyframes float1 {
                0% { transform: translateY(0px);}
                50% { transform: translateY(-8px);}
                100% { transform: translateY(0px);}
            }
            @keyframes float2 {
                0% { transform: translateY(0px);}
                50% { transform: translateY(8px);}
                100% { transform: translateY(0px);}
            }
            .animate-float1 {
                animation: float1 2s ease-in-out infinite;
            }
            .animate-float2 {
                animation: float2 2s ease-in-out infinite;
            }
        `}</style>
    </section>
);

export default MockupShowcase;
