import { Post } from "../../entity/Post";
import { AppDataSource } from "../../data-source";

export async function createPost() {
  const postRepository = AppDataSource.getRepository(Post);
  const post = new Post();
  post.title = "My New Post";
  post.description = "This is my new post description I dk why???";

  await postRepository.save(post);
}
