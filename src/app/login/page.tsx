"use client";

"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Login</h1>
        
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => signIn("credentials", { email, password, callbackUrl: "/" })}
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Entrar
          </button>

          <button
          onClick={() => router.push('/cadastro')}
          className="px-6 py-3 text-white bg-green-600 rounded-md hover:bg-green-700 transition"
        >
          Cadastre-se
        </button>

        </div>


        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
            Esqueceu a senha?
          </a>
        </div>
      </div>
    </div>
  );
}

