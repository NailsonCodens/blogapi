import { MongoPostRepository } from "../../repositories/Mongo/MongoPostRepository";
import { CreatePostCase } from "./CreatePostCase";
import { CreatePostController } from "./CreatePostController";

const mongoPostRepository = new MongoPostRepository();

const createPostCase = new CreatePostCase(mongoPostRepository);

const createPostController = new CreatePostController(createPostCase);

export { createPostCase, createPostController };
