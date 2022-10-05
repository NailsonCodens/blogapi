import { describe, test, beforeAll, expect } from "vitest";
import { CreatePostCase } from "./CreatePostCase";
import { inMemoryMongoPost } from "../../../../../../test/repositories/inMemoryMongoPost";

describe("Test implementation CreatePostCase", () => {
  let mongo: inMemoryMongoPost;
  let createpost: CreatePostCase;
  let post = {
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
    mongo = new inMemoryMongoPost();
    createpost = new CreatePostCase(mongo);
  });

  test("Should be able to create post", async () => {
    const create = await createpost.execute(post);
    expect(create).toBeInstanceOf;
  });

  test("Should not be able to save empty title", async () => {
    post.title = "";
    await expect(createpost.execute(post)).rejects.toThrowError(
      new Error("Ops, não conseguimos salvar um post que não tem título")
    );
  });

  test("Should not be able to save the same post", async () => {
    await expect(() => createpost.execute(post)).rejects.toThrowError(Error);
  });
});
