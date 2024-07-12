import { UserList } from "@/components/UserList/userList";

export default function Bolsistas () {

    const users = [
        { name: 'Ricardo Oliveira Lima', email: 'ricardo.santos@gmail.com.br', level: 5 as const },
        { name: 'Larissa Gomes Pereira', email: 'larissa.pereira@gmail.com.br', level: 4 as const },
        { name: 'Sofia Antunes Brasil', email: 'sofia.antunes@gmail.com.br', level: 2 as const },
        { name: 'Lucas Almeida Silveira', email: 'lucas.silveira@gmail.com.br', level: 3 as const },
        { name: 'Antônio Peres Millan', email: 'antonio.peres@gmail.com.br', level: 2 as const },
        { name: 'Luisa Cardoso Nunes', email: 'luisa.nunes@gmail.com.br', level: 5 as const },
    ];
    return ( 
        <UserList users={users}/>
    );
}