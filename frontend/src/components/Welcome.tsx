import { FC } from 'react';

interface WelcomeProps {
  message: string;
}

export const Welcome: FC<WelcomeProps> = ({ message }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        React + NestJS App
      </h1>
      <p className="text-gray-600">
        Message from backend: <span className="font-semibold">{message}</span>
      </p>
    </div>
  );
}