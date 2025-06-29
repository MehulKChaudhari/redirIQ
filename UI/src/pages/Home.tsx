import { FEATURES } from '../constants/features';
import { FeatureTile } from "../components/FeatureTile";
import { URLShortenerForm } from '../components/URLShortenerForm';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 py-8 px-4">
      <div className="space-y-8 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-96 h-48 rounded-2xl flex items-center justify-center">
              <img
                src="/assets/redirIQ.png"
                alt="RedirIQ"
                aria-label="RedirIQ - Smart URL Shortener"
                role="img"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern, performance-aware URL shortener that offers secure, fast redirects combined with detailed analytics and performance scoring.
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