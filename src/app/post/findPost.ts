import { Post } from "../../entity/Post";
import { AppDataSource } from "../../data-source";

export async function findPost() {
  const postRepository = await AppDataSource.getRepository(Post);

  const posts = await postRepository.find({
    relations: {
      author: true,
    },
  });

  console.log(posts);
}
