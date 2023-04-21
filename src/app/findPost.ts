import { DataSource } from "typeorm";
import { Post } from "../entity/Post";

export async function findPost(AppDataSource: DataSource) {
  const postRepository = await AppDataSource.getRepository(Post);

  const posts = await postRepository.find();

  console.log(posts);
}
