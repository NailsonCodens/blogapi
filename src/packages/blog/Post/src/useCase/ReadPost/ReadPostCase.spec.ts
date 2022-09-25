import { describe, test, beforeAll } from "vitest";
import { ReadPostCase } from "./ReadPostCase";
import { MongoPostRepository } from "../../repositories/Mongo/MongoPostRepository";

describe("Teste implementation ReadPostCase", () => {
  let mongo: MongoPostRepository;
  let readpost: ReadPostCase;

  beforeAll(() => {
    mongo = new MongoPostRepository();
    readpost = new ReadPostCase(mongo);
  });

  test("Should be start execute function", () => {
    readpost.execute();
  });

  test("Should be show all posts", () => {
    readpost.execute();
  });
});
