import { LuLink } from 'react-icons/lu';
import { FEATURES } from '../constants/features';
import { FeatureTile } from "../components/FeatureTile";
import { URLShortenerForm } from '../components/URLShortenerForm';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 py-8 px-4">
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

        <URLShortenerForm />

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