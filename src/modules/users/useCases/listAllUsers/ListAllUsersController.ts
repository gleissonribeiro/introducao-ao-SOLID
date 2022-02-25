import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {
    /** */
  }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.headers;

    let userID;
    const typeOfUserID = typeof user_id;

    if (typeOfUserID === "string") {
      userID = user_id;
    }

    if (typeOfUserID === "object") {
      [userID] = userID.flat(Infinity);
    }

    try {
      const allUsers: User[] = this.listAllUsersUseCase.execute({
        user_id: userID,
      });
      return response.json(allUsers);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { ListAllUsersController };
