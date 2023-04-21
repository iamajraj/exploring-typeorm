import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";

export async function findUser() {
  const users = await AppDataSource.manager.find(User, {
    relations: {
      post: true,
    },
  });

  console.log(users);
}
