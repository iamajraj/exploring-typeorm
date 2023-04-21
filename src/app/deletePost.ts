import { DataSource } from "typeorm";
import { Post } from "../entity/Post";

export async function deletePost(AppDataSource: DataSource, id: number) {
  const postRepository = await AppDataSource.getRepository(Post);
  // await postRepository.delete({
  //   id,
  // });
  const postToRemove = await postRepository.findOneBy({
    id,
  });

  await postRepository.remove(postToRemove);
}
