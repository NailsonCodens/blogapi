import { json, Router } from "express";
import { createPostController } from "../useCase/CreatePost";
import { updatePostCaseController } from "../useCase/UpdatePost";
const postRouter = Router();

postRouter.post("/create", (request, response) => {
  return createPostController.handle(request, response);
});

postRouter.post("/update/:id", (request, response) => {
  return updatePostCaseController.handle(request, response);
});

export { postRouter };
