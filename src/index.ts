import { createPost } from "./app/createPost";
import { deletePost } from "./app/deletePost";
import { findPost } from "./app/findPost";
import { updatePost } from "./app/updatePost";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    // await createPost(AppDataSource);
    // await updatePost(AppDataSource, 2);
    await deletePost(AppDataSource, 2);
    await findPost(AppDataSource);
  })
  .catch((error) => console.log(error));
