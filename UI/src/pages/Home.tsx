import { useState } from "react";
import { toast, Toaster } from "sonner";
import { LuLink } from 'react-icons/lu';
import { FEATURES } from '../constants/features';
import { FeatureTile } from "../components/FeatureTile";
import { URLShortenerForm } from "../components/URLShortenerForm";
import { Results } from "../components/Results";

const Home = () => {
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (url: string) => {
        if (!url.trim()) {
            toast.error("Please enter a URL");
            return;
        }

        setIsLoading(true);

        try {
            toast.success("URL shortened successfully!");
        } catch (error) {
            toast.error("Failed to shorten URL. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shortenedUrl);
            toast.success("Copied to clipboard!");
        } catch {
            toast.error("Failed to copy to clipboard");
        }
    };

    const handleReset = () => {
        setOriginalUrl("");
        setShortenedUrl("");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 py-16 px-4">
            <Toaster position="top-center" />
            <div className="space-y-8 max-w-6xl mx-auto">
                <div className="text-center">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl ring-1 ring-white/20">
                            <LuLink className="w-7 h-7 text-white" />
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-800 bg-clip-text text-transparent mb-4">
                        RedirIQ
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A modern, performance-aware URL shortener that offers secure, fast redirects combined with detailed analytics and performance scoring
                    </p>
                </div>

                <URLShortenerForm
                    onSubmit={handleSubmit}
                    isLoading={isLoading}
                    originalUrl={originalUrl}
                    onUrlChange={setOriginalUrl}
                />

                <Results
                    originalUrl={originalUrl}
                    shortenedUrl={shortenedUrl}
                    onCopy={handleCopy}
                    onReset={handleReset}
                />

                <div className="grid md:grid-cols-3 gap-6 mt-16">
                    {FEATURES.map((feature) => (
                        <FeatureTile
                            key={feature.title}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            isActive={feature.isActive}
                            comingSoon={feature.comingSoon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home; 