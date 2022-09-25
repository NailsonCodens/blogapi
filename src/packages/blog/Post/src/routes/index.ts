import { json, Router } from "express";
import { createPostController } from "../useCase/CreatePost";
const postRouter = Router();

postRouter.post("/create", (request, response) => {
  return createPostController.handle(request, response);
});

export { postRouter };
