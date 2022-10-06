import { MongoPostRepository } from "../../repositories/Mongo/MongoPostRepository";
import { ReadPostCase } from "./ReadPostCase";
import { ReadPostController } from "./ReadPostController";

const mongoPostRepository = new MongoPostRepository();
const readPostCase = new ReadPostCase(mongoPostRepository);
const readPostController = new ReadPostController(readPostCase);

export { readPostCase, readPostController };
