import { AppDataSource } from "../../data-source";
import { User } from "../../entity/User";

export async function deleteUser(id: number) {
  const userRepo = AppDataSource.getRepository(User);
  const user_to_delete = await userRepo.findOneBy({ id });
  await userRepo.remove(user_to_delete);
}
