import { Link } from 'react-router-dom';
import { useCases, customSolutions } from '../data/content';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="mb-12">
        <div className="relative">
          <div className="bg-black w-full h-[500px] flex items-center justify-center">
            <img 
              src="/images/david-hero.webp" 
              alt="Professional portrait" 
              className="h-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-6xl font-bold text-white">For David.</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Powerful Real Estate Research Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map(useCase => (
            <Link 
              key={useCase.id} 
              to={`/use-case/${useCase.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200 relative">
                {useCase.image ? (
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
                    <span className="text-white text-xl font-semibold">{useCase.title}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{useCase.description}</p>
                <span className="text-blue-600 font-semibold">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg overflow-hidden shadow-md">
          <div className="md:w-1/2 p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Custom AI Solutions for Real Estate Professionals</h2>
            <p className="text-gray-600 mb-6">
              Our custom AI solutions are designed specifically for real estate professionals, 
              investors, and developers. Each solution addresses unique challenges in the industry 
              and provides actionable insights for better decision-making.
            </p>
            <Link 
              to={`/solution/${customSolutions[0].id}`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors inline-block"
            >
              Explore Solutions
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/images/luxury-property.jpg" 
              alt="Luxury real estate property" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {customSolutions.slice(0, 4).map(solution => (
            <Link 
              key={solution.id} 
              to={`/solution/${solution.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    {solution.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <span className="text-blue-600 font-semibold">View details →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Transform Your Real Estate Research</h2>
          <p className="text-xl mb-6">
            Leverage the power of AI to gain competitive advantages, identify opportunities earlier, 
            and make data-driven decisions with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/use-case/market-analysis" 
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Explore Use Cases
            </Link>
            <Link 
              to={`/solution/${customSolutions[0].id}`}
              className="bg-transparent hover:bg-blue-500 text-white border border-white font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Discover Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
