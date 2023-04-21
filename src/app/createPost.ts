import { DataSource } from "typeorm";
import { Post } from "../entity/Post";

export async function createPost(AppDataSource: DataSource) {
  const postRepository = await AppDataSource.getRepository(Post);
  const post = new Post();
  post.title = "My New Post";
  post.description = "This is my new post description I dk why???";

  await postRepository.save(post);
}
