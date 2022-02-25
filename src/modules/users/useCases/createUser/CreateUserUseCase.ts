import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ email, name }: IRequest): User {
    // Complete aqui

    // Se o email do usuário já existe, o erro é emitido e o usuário não é criado
    if (this.usersRepository.findByEmail(email)) {
      throw new Error("email already exists");
    }
    //
    const newUser = this.usersRepository.create({ name, email });
    return newUser;
  }
}

export { CreateUserUseCase };
