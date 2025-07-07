import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

// Komponen animasi loading
const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fcfcfd]">
        <div className="loader mb-4"></div>
        <div className="text-purple-700 font-semibold text-lg animate-pulse">
            Memuat halaman...
        </div>
        <style>{`
            .loader {
                border: 6px solid #e9d5ff;
                border-top: 6px solid #6c47ff;
                border-radius: 50%;
                width: 56px;
                height: 56px;
                animation: spin 1s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg);}
                100% { transform: rotate(360deg);}
            }
        `}</style>
    </div>
);

// Lazy load komponen
const Banner = lazy(() => import("./components/Banner1"));
const Privacy = lazy(() => import("./components/privacy"));

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    <Route path="/" element={<Banner />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
);
