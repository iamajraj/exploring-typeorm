import { User } from "../../entity/User";
import { AppDataSource } from "../../data-source";

export async function createUser() {
  const userRepository = AppDataSource.getRepository(User);

  const new_user = new User();

  new_user.firstName = "Muhammad";
  new_user.lastName = "Raj";
  new_user.age = 101;

  await userRepository.save(new_user);
}
