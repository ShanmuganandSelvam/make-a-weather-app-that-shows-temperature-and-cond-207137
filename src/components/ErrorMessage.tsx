import { FaExclamationTriangle } from 'react-icons/fa';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded shadow-md max-w-lg mx-auto">
      <div className="flex items-center">
        <FaExclamationTriangle className="text-red-500 mr-3" />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;