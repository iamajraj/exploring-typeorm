import { DataSource } from "typeorm";
import { Post } from "../entity/Post";

export async function updatePost(AppDataSource: DataSource, id: number) {
  const postRepo = await AppDataSource.getRepository(Post);
  const post = await postRepo.findOne({
    where: {
      id,
    },
  });
  post.title = "My New Post updated dk why???";
  await postRepo.save(post);
}
