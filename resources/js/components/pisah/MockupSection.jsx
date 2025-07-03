import React from "react";

const MockupSection = () => (
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
                    {/* Mockup 1 */}
                    <div
                        className="w-full flex justify-center"
                        data-aos="zoom-in-right"
                        data-aos-delay="200"
                    >
                        <div className="relative group hover:scale-105 transition-transform duration-500">
                            <img
                                src="/mockup1.png"
                                alt="Mockup Aspira Login"
                                className="rounded-[2rem] shadow-2xl transition-all duration-700 ease-in-out"
                                style={{
                                    width: "100%",
                                    maxWidth: "420px",
                                    animation: "float1 4s ease-in-out infinite",
                                }}
                            />
                        </div>
                    </div>

                    {/* Mockup 2 */}
                    <div
                        className="w-full flex justify-center"
                        data-aos="zoom-in-left"
                        data-aos-delay="400"
                    >
                        <div className="relative group hover:scale-105 transition-transform duration-500">
                            <img
                                src="/mockup2.png"
                                alt="Mockup Aspira Dashboard"
                                className="rounded-[2rem] shadow-2xl transition-all duration-700 ease-in-out"
                                style={{
                                    width: "100%",
                                    maxWidth: "480px",
                                    animation:
                                        "float2 4.2s ease-in-out infinite",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Animasi ringan untuk mockup */}
                <style>{`
    @keyframes float1 {
        0% {
            transform: translateY(0px) scale(1) rotate(-1deg);
        }
        50% {
            transform: translateY(-12px) scale(1.03) rotate(1.2deg);
        }
        100% {
            transform: translateY(0px) scale(1) rotate(-1deg);
        }
    }

    @keyframes float2 {
        0% {
            transform: translateY(0px) scale(1) rotate(1deg);
        }
        50% {
            transform: translateY(10px) scale(1.025) rotate(-1.2deg);
        }
        100% {
            transform: translateY(0px) scale(1) rotate(1deg);
        }
    }
`}</style>
            </section>

);

export default MockupSection;
