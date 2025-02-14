import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ProtegidoPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login"); // Redireciona se o usuário não estiver autenticado
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-semibold">Área Protegida</h1>
      <p className="text-gray-600 mt-2">Bem-vindo, {session.user?.email}!</p>
      <a
        href="/api/auth/signout"
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Sair
      </a>
    </div>
  );
}
