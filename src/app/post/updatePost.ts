import { AppDataSource } from "../data-source";
import { Post } from "../entity/Post";

export async function updatePost(id: number) {
  const postRepo = AppDataSource.getRepository(Post);
  const post = await postRepo.findOne({
    where: {
      id,
    },
  });
  post.title = "My New Post updated dk why???";
  await postRepo.save(post);
}
