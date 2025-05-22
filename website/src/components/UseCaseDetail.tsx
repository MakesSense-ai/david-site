import { useParams, Link } from 'react-router-dom';
import { useCases, customSolutions, UseCase } from '../data/content';

const UseCaseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const useCase = useCases.find(uc => uc.id === id) as UseCase;
  const relatedSolution = customSolutions.find(solution => solution.relatedUseCase === id);
  
  if (!useCase) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-red-600">Use Case Not Found</h1>
        <p className="mt-4">The requested use case could not be found.</p>
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
      
      {useCase.image && (
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={useCase.image} 
            alt={useCase.title} 
            className="w-full h-[300px] object-cover"
          />
        </div>
      )}
      
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{useCase.title}</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
        <p className="text-gray-700 text-lg mb-6">{useCase.description}</p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Challenges</h2>
        <ul className="list-disc pl-6 mb-6">
          {useCase.challenges.map((challenge, index) => (
            <li key={index} className="text-gray-700 mb-2">{challenge}</li>
          ))}
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI-Powered Solution</h2>
        <p className="text-gray-700 text-lg">{useCase.solution}</p>
      </div>
      
      {relatedSolution && (
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Solution</h2>
          <h3 className="text-xl font-bold text-blue-700 mb-2">{relatedSolution.title}</h3>
          <p className="text-gray-700 mb-4">{relatedSolution.description}</p>
          <Link 
            to={`/solution/${relatedSolution.id}`} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors inline-block"
          >
            Explore This Solution
          </Link>
        </div>
      )}
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Other Use Cases You Might Be Interested In</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {useCases
            .filter(uc => uc.id !== id)
            .slice(0, 4)
            .map(otherUseCase => (
              <Link 
                key={otherUseCase.id} 
                to={`/use-case/${otherUseCase.id}`}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{otherUseCase.title}</h3>
                <p className="text-gray-600 line-clamp-2">{otherUseCase.description}</p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default UseCaseDetail;
