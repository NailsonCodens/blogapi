import { json, Router } from "express";
import { createPostController } from "../useCase/CreatePost";
import { updatePostCaseController } from "../useCase/UpdatePost";
import { readPostController } from "../useCase/ReadPost";

const postRouter = Router();

postRouter.get("/all", (request, response) => {
  return readPostController.handleAllPost(request, response);
});

postRouter.post("/create", (request, response) => {
  return createPostController.handle(request, response);
});

postRouter.post("/update/:id", (request, response) => {
  return updatePostCaseController.handle(request, response);
});

export { postRouter };
