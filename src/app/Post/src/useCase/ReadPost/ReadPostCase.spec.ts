import { describe, test, beforeAll, expect } from "vitest";
import { ReadPostCase } from "./ReadPostCase";
import { inMemoryMongoPost } from "../../../../../../test/repositories/inMemoryMongoPost";

describe("Teste implementation ReadPostCase", () => {
  let mongoInMemory: inMemoryMongoPost;
  let readPost: ReadPostCase;

  beforeAll(() => {
    mongoInMemory = new inMemoryMongoPost();
    readPost = new ReadPostCase(mongoInMemory);
  });

  test("Should be show all posts", async () => {
    const readpost = await readPost.execute();
    expect(readpost).toEqual(expect.arrayContaining([]));
  });
});
