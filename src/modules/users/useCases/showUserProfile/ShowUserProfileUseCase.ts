import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {
    /** */
  }

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userProfile = this.usersRepository.findById(user_id);

    // Se o usuário não for encontrado, retorna um erro
    if (!userProfile) {
      throw new Error("user not found");
    }
    //

    return userProfile;
  }
}

export { ShowUserProfileUseCase };
