import { MongoPostRepository } from "../../repositories/Mongo/MongoPostRepository";
import { UpdatePostCase } from "./UpdatePostCase";
import { UpdatePostCaseController } from "./UpdatePostController";

const mongoPostRepository = new MongoPostRepository();
const updatePostCase = new UpdatePostCase(mongoPostRepository);
const updatePostCaseController = new UpdatePostCaseController(updatePostCase);

export { updatePostCase, updatePostCaseController };
