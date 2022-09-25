import { json, Router } from "express";
import { postRouter } from "../packages/blog/Post/src/routes";

const router = Router();

router.use("/post", postRouter);

export { router };
