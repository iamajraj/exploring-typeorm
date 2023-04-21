import { AppDataSource } from "../../data-source";
import { Post } from "../../entity/Post";
import { User } from "../../entity/User";

export async function makeUserPostRelation() {
  const userRepo = AppDataSource.getRepository(User);
  const postRepo = AppDataSource.getRepository(Post);

  const post = await postRepo.findOneBy({ id: 3 });
  const user = await userRepo.findOneBy({ id: 2 });

  user.post = [post];
  await userRepo.save(user);
}
