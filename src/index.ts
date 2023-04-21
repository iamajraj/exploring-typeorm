import { createPost } from "./app/post/createPost";
import { createUser } from "./app/user/createUser";
import { deletePost } from "./app/post/deletePost";
import { findPost } from "./app/post/findPost";
import { updatePost } from "./app/post/updatePost";
import { AppDataSource } from "./data-source";
import { findUser } from "./app/user/findUser";
import { deleteUser } from "./app/user/deleteUser";
import { makeUserPostRelation } from "./app/relation/makeUserPostRelation";

AppDataSource.initialize()
  .then(async () => {
    // await createPost();
    // await updatePost(2);
    // await deletePost(2);
    await findPost();
    // await createUser();
    // await deleteUser(1);
    // await makeUserPostRelation();
    // await findUser();
  })
  .catch((error) => console.log(error));
