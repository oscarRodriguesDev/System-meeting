'use client';

import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login');  // Redireciona para a página de login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-semibold mb-8">Página Principal</h1>
      <button
        onClick={handleLoginRedirect}
        className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      >
        Ir para Login
      </button>

      <button
          onClick={() => router.push('/protected')}
          className="px-6 py-3 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition"
        >
          Página Protegida
        </button>
      
    </div>
  );
}
