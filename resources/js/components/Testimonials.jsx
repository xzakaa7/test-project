import React from "react";

const testimonials = [
    {
        name: "Budi Santoso",
        comment:
            "Aplikasinya mudah digunakan dan sangat membantu menyampaikan aspirasi.",
    },
    {
        name: "Siti Aminah",
        comment:
            "Sekarang bisa lapor masalah jalan rusak tanpa ribet. Luar biasa!",
    },
];

const Testimonials = () => (
    <section className="bg-white text-gray-800 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h2
                className="text-3xl sm:text-4xl font-extrabold mb-12 text-purple-700"
                data-aos="fade-down"
            >
                Apa Kata Mereka
            </h2>
            <div className="block md:hidden">
                <div
                    className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 px-1 hide-scrollbar"
                    style={{ WebkitOverflowScrolling: "touch" }}
                >
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            className="min-w-[90vw] max-w-[90vw] bg-gradient-to-br from-purple-100 via-white to-purple-50 p-6 rounded-3xl shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 snap-center flex-shrink-0 relative"
                        >
                            <div className="flex justify-center mb-4 mt-2">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 via-blue-300 to-purple-200 flex items-center justify-center shadow-md border-4 border-white mx-auto overflow-hidden">
                                    <span className="text-2xl font-bold text-white">
                                        {item.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </span>
                                </div>
                            </div>
                            <p className="text-base italic text-gray-700 mb-6 leading-relaxed break-words">
                                “{item.comment}”
                            </p>
                            <div className="text-sm font-semibold text-purple-700">
                                {item.name}
                            </div>
                            <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mt-4"></div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-2 mt-5">
                    {testimonials.map((_, idx) => (
                        <span
                            key={idx}
                            className="w-3 h-3 rounded-full bg-purple-300 hover:bg-purple-500 transition-all duration-300"
                        ></span>
                    ))}
                </div>
                <style>{`
                    .hide-scrollbar::-webkit-scrollbar { display: none; }
                    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}</style>
            </div>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mt-6">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                        className="bg-gradient-to-br from-purple-100 via-white to-purple-50 p-8 rounded-3xl shadow-md border border-purple-200 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex flex-col justify-between h-full">
                            <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                                “{item.comment}”
                            </p>
                            <div className="text-sm font-semibold text-purple-700">
                                {item.name}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Testimonials;
