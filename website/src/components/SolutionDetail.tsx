import { useParams, Link } from 'react-router-dom';
import { customSolutions, useCases, CustomSolution } from '../data/content';

const SolutionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const solution = customSolutions.find(sol => sol.id === id) as CustomSolution;
  const relatedUseCase = useCases.find(uc => uc.id === solution?.relatedUseCase);
  
  if (!solution) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-red-600">Solution Not Found</h1>
        <p className="mt-4">The requested solution could not be found.</p>
        <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-t-lg p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">{solution.title}</h1>
        <p className="text-xl">{solution.description}</p>
      </div>
      
      <div className="bg-white rounded-b-lg shadow-lg p-8 mb-8">
        {solution.image && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-md">
            <img 
              src={solution.image} 
              alt={solution.title} 
              className="w-full h-[300px] object-cover"
            />
          </div>
        )}
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <ol className="list-decimal pl-6">
            {solution.howItWorks.map((step, index) => (
              <li key={index} className="text-gray-700 mb-3 text-lg">{step}</li>
            ))}
          </ol>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solution.features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Real-World Application</h2>
          <p className="text-gray-700 italic">{solution.realWorldApplication}</p>
        </div>
      </div>
      
      {relatedUseCase && (
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Use Case</h2>
          <h3 className="text-xl font-bold text-blue-700 mb-2">{relatedUseCase.title}</h3>
          <p className="text-gray-700 mb-4">{relatedUseCase.description}</p>
          <Link 
            to={`/use-case/${relatedUseCase.id}`} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors inline-block"
          >
            Explore This Use Case
          </Link>
        </div>
      )}
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other AI Solutions You Might Be Interested In</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {customSolutions
            .filter(sol => sol.id !== id)
            .slice(0, 4)
            .map(otherSolution => (
              <Link 
                key={otherSolution.id} 
                to={`/solution/${otherSolution.id}`}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{otherSolution.title}</h3>
                <p className="text-gray-600 line-clamp-2">{otherSolution.description}</p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;
