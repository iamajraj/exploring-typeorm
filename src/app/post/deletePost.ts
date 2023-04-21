import { Post } from "../entity/Post";
import { AppDataSource } from "../data-source";

export async function deletePost(id: number) {
  const postRepository = await AppDataSource.getRepository(Post);
  // await postRepository.delete({
  //   id,
  // });
  const postToRemove = await postRepository.findOneBy({
    id,
  });

  await postRepository.remove(postToRemove);
}
