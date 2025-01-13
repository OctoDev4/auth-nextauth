import {auth} from "auth";

export default async function ServerPage() {

    const session = await auth()

    if (!session || !session.user) {
        return <div>acesso nao autorizado</div>;
    }


    return(
    <div>
   <h1>Página Servidor</h1>
    </div>
    )
}