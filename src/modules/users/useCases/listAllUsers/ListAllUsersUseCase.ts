import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {
    /** */
  }

  execute({ user_id }: IRequest): User[] | null {
    // Complete aqui

    const user: User | undefined = this.usersRepository.findById(user_id);

    // Emite um erro se o ID do usuário não existe
    if (!user) {
      throw new Error("user not found");
    }
    //

    // Emite um erro se o usuário não tem privilégios para listar todos usuários
    if (!user.admin) {
      throw new Error("user has no admin privilegies");
    }
    //

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
