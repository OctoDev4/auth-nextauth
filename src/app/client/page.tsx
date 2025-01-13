"use client";
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function ClientPage() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Carregando...</div>;
    }

    if (!session || !session.user) {
        return (
            <div>
                <h1>Acesso não permitido</h1>
                <p>Você precisa estar autenticado para acessar esta página.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Bem-vindo, {session.user.name}</h1>
            <p>Seu email é: {session.user.email}</p>
        </div>
    );
}
