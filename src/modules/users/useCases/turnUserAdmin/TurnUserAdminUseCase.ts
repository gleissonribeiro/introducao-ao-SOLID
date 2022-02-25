import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User {
    // Complete aqui

    const user: User | undefined = this.usersRepository.findById(user_id);

    // Se o ID do usuário não for encontrado, emite um erro
    if (!user) {
      throw new Error("user not found");
    }

    return user.turnToAdmin();
  }
}

export { TurnUserAdminUseCase };
