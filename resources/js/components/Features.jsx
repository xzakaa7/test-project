import React from "react";
import { Settings, Globe, Smartphone, MessageCircle } from "lucide-react";

const features = [
    { icon: <Settings size={36} />, title: "Lapor Cepat" },
    { icon: <Globe size={36} />, title: "Responsif" },
    { icon: <Smartphone size={36} />, title: "User Friendly" },
    { icon: <MessageCircle size={36} />, title: "Saling Terhubung" },
];

const Features = () => (
    <section
        id="fitur"
        className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 px-6 py-20`}
    >
        <h2
            className="text-4xl font-bold text-purple-700 mb-6 text-center"
            data-aos="fade-down"
        >
            Fitur & Keunggulan
        </h2>
        <div className="mt-12 grid max-[640px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
            {features.map((feature, index) => (
                <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                    className="group flex flex-col items-center justify-center bg-white rounded-3xl p-8 h-64 shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                    <div className="bg-purple-100 group-hover:bg-purple-600 text-purple-600 group-hover:text-white transition-all duration-300 p-4 rounded-full mb-4">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-center text-gray-800 group-hover:text-purple-800 transition-all duration-300">
                        {feature.title}
                    </h3>
                </div>
            ))}
        </div>
    </section>
);

export default Features;
