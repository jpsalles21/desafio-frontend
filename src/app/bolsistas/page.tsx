import { UserList } from "@/components/UserList/userList";

export default function Bolsistas () {

    const users = [
        { name: 'Ricardo Oliveira Lima', email: 'ricardo.santos@gmail.com.br', accessLevel: 5 },
        { name: 'Larissa Gomes Pereira', email: 'larissa.pereira@gmail.com.br', accessLevel: 4 },
        { name: 'Sofia Antunes Brasil', email: 'sofia.antunes@gmail.com.br', accessLevel: 2 },
        { name: 'Lucas Almeida Silveira', email: 'lucas.silveira@gmail.com.br', accessLevel: 3 },
        { name: 'Antônio Peres Millan', email: 'antonio.peres@gmail.com.br', accessLevel: 2 },
        { name: 'Luisa Cardoso Nunes', email: 'luisa.nunes@gmail.com.br', accessLevel: 5 },
    ];
    return ( 
        <UserList users={users}/>
    );
}