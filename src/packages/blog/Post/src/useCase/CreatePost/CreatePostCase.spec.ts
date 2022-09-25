import { describe, test, beforeAll, expect } from "vitest";
import { CreatePostCase } from "./CreatePostCase";
import { MongoPostRepository } from "../../repositories/Mongo/MongoPostRepository";

describe("Test implementation CreatePostCase", () => {
  let mongo: MongoPostRepository;
  let createpost: CreatePostCase;
  let data = {
    title: "Novo titulo 2",
    detail: "teste",
    description: "teste",
    category: "teste",
    content: "teste",
    metatitle: "teste",
    metadescription: "teste",
    metakeywords: "",
    metarobots: "",
  };

  beforeAll(() => {
    mongo = new MongoPostRepository();
    createpost = new CreatePostCase(mongo);
  });

  test("Should be create post", async () => {
    const create = await createpost.execute(data);

    expect(create).toBeInstanceOf;
  });

  test("Should be not save title empty", async () => {
    data.title = "";
    await expect(createpost.execute(data)).rejects.toThrowError(
      new Error("Ops, não conseguimos salvar um post que não tem título")
    );
  });

  test("Should be not save same post", async () => {
    await expect(() => createpost.execute(data)).rejects.toThrowError(Error);
  });
});
